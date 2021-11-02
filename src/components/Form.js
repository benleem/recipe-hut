import React from 'react'


const Form = () => {
    return (
        <section className='form-wrapper'>
            <form action="" className='form-container'>
                <div className='input-text-wrapper'>
                    <input type="text" placeholder="What's cookin?" />
                    <div className="ingredient-wrapper">
                        <div className="ingredient-container">
                            <input type="text" placeholder="Ingredients" id="input-ingredients"/>
                            <div className="controls">
                                <div className="add-ingredient">
                                    <span className="ingredient-bar"></span>
                                </div>
                            </div>
                        </div>
                        <div className="show-ingredients"></div>
                    </div>
                </div>
                <textarea placeholder="Description/Intructions" name="" id="input-description" cols="30" rows="10" style={{paddingTop:'10px', minHeight:'40px'}}></textarea>
                <button type='submit'>Submit recipe!</button>
            </form>
        </section>
    )
}

export default Form