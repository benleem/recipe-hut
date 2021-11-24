import React, { useRef, useState, useEffect} from 'react'
import axios from 'axios';
import Ingredient from './Ingredient'

const Form = ({ editObject,editId, setEditMode, editMode, fetchData, user, posts}) => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState("");
    const inputText = useRef();

    const saveInput=(inputValue)=>{
        setInput(inputValue);
    }

    const addIngredient = () =>{
        setIngredients([...ingredients, input]);
        inputText.current.value = '';
        setInput('');
        inputText.current.focus();
    }

    const addPost = async (form) =>{
        if (editMode === true){
            try {
                await axios.patch('/.netlify/functions/edit', {
                    id: editId,
                    postInfo:{
                        title: form.title.value,
                        ingredients: ingredients,
                        description: form.description.value,
                        imgUrl: form.url.value
                    }
                });
            } catch (err) {
                console.error(err);
            } 
            fetchData();
        }
        else if (editMode === false){
            try {
                await axios.post('/.netlify/functions/add', {
                    username: user.user_metadata.full_name,
                    userId: user.id,
                    title: form.title.value,
                    ingredients: ingredients,
                    description: form.description.value,
                    imgUrl: form.url.value
                });
            } catch (err) {
                console.error(err);
            } 
            fetchData();
        }
        setEditMode(false);
    }

    useEffect(() => {
        if (editMode === true) {
            setIngredients(editObject.ingredients);   
        }
    }, [editObject, editMode])

    return (
        <section className='form-wrapper'>
            <form action="" className='form-container' onSubmit={e => addPost(e.target)}>
                <div className='input-text-wrapper'>
                    <input type="text" defaultValue={editMode === true ? editObject.title : ""} name='title' placeholder="What's cookin?" required/>
                    <div className="ingredient-wrapper">
                        <div className="ingredient-container">
                            <input ref={inputText} type="text" placeholder="Ingredients" id="input-ingredients" onInput={e => saveInput(e.target.value)} required={ingredients.length ? false : true}/>
                            <div className="controls">
                                <div className="add-ingredient" onClick={addIngredient}>
                                    <span className="ingredient-bar"></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {ingredients.map(ingredient =><Ingredient ingredient={ingredient} ingredients={ingredients} setIngredients={setIngredients}/>)}
                        </div>
                    </div>
                </div>
                <textarea placeholder="Description/Intructions" defaultValue={editMode === true ? editObject.description : ""} name="description" id="input-description" cols="30" rows="10" style={{paddingTop:'10px', minHeight:'40px'}} required></textarea>
                <input placeholder='Youtube video(optional)' defaultValue={editMode === true ? editObject.imgUrl : ""} type="url" name="url" id="url"/>
                <button className='submit' type='submit'>Submit recipe!</button>
            </form>
        </section>
    )
}

export default Form