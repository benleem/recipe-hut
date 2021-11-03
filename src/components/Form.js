import React, { useState} from 'react'
import axios from 'axios';
import Ingredient from './Ingredient'

const Form = ({user}) => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState("");

    const saveInput=(inputValue)=>{
        setInput(inputValue);
    }

    const addIngredient = () =>{
        setIngredients([...ingredients, input]);
        document.querySelector('#input-ingredients').value = '';
        setInput('');
    }

    const addPost = async (form) =>{
        try {
            await axios.post('/.netlify/functions/addpost', {
                username: user.user_metadata.full_name,
                title: form.title.value,
                ingredients: ingredients,
                description: form.description.value,
                url: form.url.value
            });
        } catch (err) {
            console.error(err);
        } 
    }

    return (
        <section className='form-wrapper'>
            <form action="" className='form-container' onSubmit={e => addPost(e.target)}>
                <div className='input-text-wrapper'>
                    <input type="text" name='title' placeholder="What's cookin?" required/>
                    <div className="ingredient-wrapper">
                        <div className="ingredient-container">
                            <input type="text" placeholder="Ingredients" id="input-ingredients" onInput={e => saveInput(e.target.value)} required/>
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
                <textarea placeholder="Description/Intructions" name="description" id="input-description" cols="30" rows="10" style={{paddingTop:'10px', minHeight:'40px'}} required></textarea>
                <input placeholder='Picture url' type="text" name="url" id="url" required/>
                <button className='submit' type='submit'>Submit recipe!</button>
            </form>
        </section>
    )
}

export default Form