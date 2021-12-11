import React, { useRef, useState, useEffect} from 'react'
import axios from 'axios';
import Ingredient from './Ingredient'

const Form = ({ setLoading, setActive, editObject, editId, setEditMode, editMode, fetchData, user}) => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState("");
    const [imageSelect, setImageSelect] = useState();
    const [editImage, setEditImage] = useState(false)
    const inputText = useRef();
    const form = useRef()

    const addIngredient = () =>{
        setIngredients([...ingredients, input]);
        inputText.current.value = '';
        setInput('');
        inputText.current.focus();
    }

    const handleClick = () =>{
        setEditImage(true);
    }

    const uploadImage = async (e, callback) =>{
        e.preventDefault();
        setActive(false);
        const data = new FormData();
        data.append('file', imageSelect);
        data.append('upload_preset', process.env.REACT_APP_CLOUD_PRESET);
        try {
            if (editImage === true || editMode === false) {
                if (editMode === true) {
                    await axios.post('/.netlify/functions/cloudinary_delete', {data: editObject.imgId});
                }
                setLoading(true);
                const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, data)
                const file = response.data;
                callback(file, e.target); 
            }
            else {
                setLoading(true);
                const file = null;
                callback(file, e.target); 
            }
            
        } catch (err) {
            console.error(err);
        }  
        setEditImage(false);
    }

    const addPost = async (image, form) =>{
        if (image === null) {
            await axios.patch('/.netlify/functions/edit', {
                id: editId,
                postInfo:{
                    title: form.title.value,
                    ingredients: ingredients,
                    description: form.description.value,
                }
            });
        }
        else {
            if (editMode === true){
                await axios.patch('/.netlify/functions/edit', {
                    id: editId,
                    postInfo:{
                        title: form.title.value,
                        ingredients: ingredients,
                        description: form.description.value,
                        imgUrl: image.secure_url,
                        imgId: image.public_id,
                    }
                });
            }
            else if (editMode === false){
                await axios.post('/.netlify/functions/add', {
                    username: user.user_metadata.full_name,
                    userId: user.id,
                    title: form.title.value,
                    ingredients: ingredients,
                    description: form.description.value,
                    imgUrl: image.secure_url,
                    imgId: image.public_id
                });
            }
        }
        setEditMode(false);
        setIngredients([]);
        form.reset();
        fetchData();
    }

    useEffect(() => {
        if (editMode === true) {
            setIngredients(editObject.ingredients);   
        }
        else if(editMode === false){
            setActive(false);
            setIngredients([]);
            form.current.reset();
        }
    }, [editObject, editMode, setActive])
      
    return (
        <section className='form-wrapper' >
            <form action="" ref={form} className='form-container' onSubmit={e => uploadImage(e, addPost)}>
                <div className='input-text-wrapper'>
                    <input type="text" defaultValue={editMode === true ? editObject.title : ""} name='title' placeholder="What's cookin?" required/>
                    <div className="ingredient-wrapper">
                        <div className="ingredient-container">
                            <input ref={inputText} type="text" placeholder="Ingredients" id="input-ingredients" onInput={e => setInput(e.target.value)} required={ingredients.length ? false : true}/>
                            <div className="controls">
                                <div className="add-ingredient" onClick={addIngredient}>
                                    <span className="ingredient-bar"></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {ingredients.map((ingredient, index) =><Ingredient key={index} id={index} ingredient={ingredient} ingredients={ingredients} setIngredients={setIngredients}/>)}
                        </div>
                    </div>
                </div>
                <textarea placeholder="Description/Intructions" defaultValue={editMode === true ? editObject.description : ""} name="description" id="input-description" cols="30" rows="10" style={{paddingTop:'10px', minHeight:'40px'}} required></textarea>
                {editMode ? 
                    editImage ? <input type="file" name='file' className='file-input' placeholder='Upload image' onChange={e => setImageSelect(e.target.files[0])} required/>
                    : <button onClick={handleClick} className='edit-image'>Change Image</button>
                :<input type="file" name='file' className='file-input' placeholder='Upload image' onChange={e => setImageSelect(e.target.files[0])} required/>}
                <button className='submit' type='submit'>Submit recipe!</button>
            </form>
        </section>
    )
}

export default Form

