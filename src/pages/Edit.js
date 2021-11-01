import React from 'react'

const Edit= ({user}) => {
    if (user === null) {
        return (
            <div>
                <p>Please login to view this page!</p>
            </div>
        )
    }   
    else{
        return (
            <div>
                <p>This is the edit page</p>
            </div>
        )
    }   
}

export default Edit