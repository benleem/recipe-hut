import React from 'react'

const Offers = () => {
    return (
        <div className='offers'>
            <ul>
                <li>
                    <img src="./img/explore.svg" alt="" />
                    <div>
                        <h3>Explore</h3>
                        <p>Explore our home page to see the most recent recipes being shared to our platform. If you want to find a 
                            specific recipe by title or poster, utilize our search bar to narrow the displayed recipes.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="./img/save.svg" alt="" />
                    <div>
                        <h3>Save</h3>
                        <p>If you stumble upon a recipe you like, you have the option to save it. Look in the bottom right of the 
                            recipe card and click the save button. Once saved, these recipes can be found in your collections page.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="./img/add.svg" alt="" />
                    <div>
                        <h3>Share</h3>
                        <p>If there is a recipe you'd like to share to the community simply create an account, confirm your email and get 
                            to cookin'. If there is something wrong with one of your posts you can also delete and edit them as pleased.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Offers
