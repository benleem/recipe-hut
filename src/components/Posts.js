import React from 'react'
import Post from './Post'
import Loading from './Loading'

const Posts = ({ setEditObject, setEditId,setActive, setEditMode, search, fetchData, posts, setLoading, loading}) => {
    return (
        <div className='posts'>
            {loading ? <Loading/> : 
                posts.filter((post) => {
                    return (
                        post.data.postInfo.username.toLowerCase().includes(search) ||
                        post.data.postInfo.title.toLowerCase().includes(search)
                    )
                }).map((post) => <Post setLoading={setLoading} setEditObject={setEditObject} setEditId={setEditId} setActive={setActive} setEditMode={setEditMode} fetchData={fetchData} key={post.ref["@ref"].id} post={post}/>).reverse()
            }
        </div>
    )
}

export default Posts