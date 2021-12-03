import React from 'react'

const Ingredient = ({ id, ingredient, ingredients, setIngredients}) => {
    const deleteIngredient=()=>{
        setIngredients(ingredients.filter((item, index) => index !== id));
    }

    return (
        <div className="ingredient-container">
            <div className="ingredient">{ingredient}</div>
            <div className="controls">
                <div className="delete-ingredient" onClick={deleteIngredient}>
                    <span className="ingredient-bar"></span>
                </div>
            </div>
        </div>
    )
}

export default Ingredient
