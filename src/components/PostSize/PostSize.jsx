import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../../components/Posts/Posts'
import './PostSize.css'  
const PostSize = () =>{
    return(
        <div className="PostSize">
            <PostShare/>
            <Posts/>
        </div>
    )
}

export default PostSize