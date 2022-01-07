import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'

const Post = ({ favorites, setFavorites, id, setLoading, setEditObject, setEditId, setActive, setEditMode, fetchData, post }) => {
    const location = useLocation();
    const favoriteImg = useRef();

    const editPost = () =>{
        setEditObject(post.data.postInfo);
        setEditId(post.ref["@ref"].id);
        window.scrollTo(0, 0);
        setEditMode(true);
        setActive(true);
    }
    
    const deletePost = async () =>{
        setEditMode(false);
        try {
            setLoading(true);
            await axios.post('/.netlify/functions/cloudinary_delete', {data: post.data.postInfo.imgId});
            await axios.delete('/.netlify/functions/delete', {data:{ id: post.ref["@ref"].id}});
        } catch (err) {
            console.error(err);
        }
        fetchData();
    }

    const deleteFavorite = () =>{
        setFavorites(favorites.filter(favorite => favorite.favorited !== false));
        console.log(`This post was removed from your favorites: ${id}`)
    }

    const addFavorite = async () =>{
        console.log(`This post was added to your favorites: ${id}`)
    }

    const handleFavorite = () =>{
        if(favorites.length > 0){
            let currentFavorite = favorites.filter(favorite => favorite.id === id);
            currentFavorite = currentFavorite[0];
            if(currentFavorite === undefined){
                setFavorites([...favorites, {id: id, favorited:true}])
                addFavorite();
            }
            else if(currentFavorite.favorited === true) {
                setFavorites(favorites.map(favorite =>{
                    if (favorite.id === id) {
                        favorite.favorited = false;
                        return favorite;
                    }
                    else{
                        return favorite;
                    }
                }));
                deleteFavorite();
            }
            else if (currentFavorite.favorited === false) {
                addFavorite();
                setFavorites(favorites.map(favorite =>{
                    if (favorite.id === id) {
                        favorite.favorited = true;
                        return favorite;
                    } 
                    else{
                        return favorite;
                    }
                }));
            }
        }
        else{
            setFavorites([...favorites, {id: id, favorited:true}]);
            addFavorite();
        }
    
    }

    useEffect(() => {
        if (location.pathname === "/favorites" || location.pathname === '/') {
            let current = favorites.find(favorite => favorite.id === id);
            if (current === undefined || current.favorited === false) {
                favoriteImg.current.src = './img/bookmark.svg';
            }
            else if (current && current.favorited === true) {
                favoriteImg.current.src = './img/bookmark2.svg';
            }  
        }
    }, [favorites, location])

    return (
        <div className='post'>
            <div className='img-container'>
                <img src={post.data.postInfo.imgUrl} alt="recipe"/>
            </div>
            <div>
                <h2 style={{paddingBottom:'0px'}}>{post.data.postInfo.title}</h2>
                <p style={{fontSize:'12px'}}>By: {post.data.postInfo.username}</p>
                <h3>Ingredients</h3>
                <p>{post.data.postInfo.ingredients.map((ingredient, index) => ((index ? ', ': '') + ingredient))}</p>
                <h3>Description</h3>
                <p className='description'>{post.data.postInfo.description}</p>
                {(location.pathname === "/favorites" || location.pathname === '/') ?
                    <div className='edit-section'>
                        <button className='favorite-post' onClick={handleFavorite}><img ref={favoriteImg}  src='./img/bookmark.svg' alt="" /></button>
                    </div>:
                    <div className='edit-section'>
                        <button className='edit-post' onClick={editPost}>Edit</button>
                        <button className='delete-post' onClick={deletePost}>Delete</button>
                    </div>
                }
            </div>
        </div>
    )
    
}

export default Post