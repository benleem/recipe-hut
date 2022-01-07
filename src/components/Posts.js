import React, { useEffect} from 'react'
import Post from './Post'
import Loading from './Loading'

const Posts = ({ favorites, setFavorites, setEditObject, setEditId,setActive, setEditMode, search, fetchData, posts, setLoading, loading }) => {
    useEffect(() => {
        console.log(favorites);
    }, [favorites])
    return (
        <div className='posts'>
            {loading ? <Loading/> : 
                posts.filter((post) => {
                    return (
                        post.data.postInfo.username.toLowerCase().includes(search) ||
                        post.data.postInfo.title.toLowerCase().includes(search)
                    )
                }).map((post) => <Post setFavorites={setFavorites} favorites={favorites} setLoading={setLoading} setEditObject={setEditObject} setEditId={setEditId} setActive={setActive} setEditMode={setEditMode} fetchData={fetchData} key={post.ref["@ref"].id} id={post.ref["@ref"].id} post={post}/>).reverse()
            }
        </div>
    )
}

export default Posts