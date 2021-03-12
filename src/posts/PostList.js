import React from 'react';
import PostData from '../data/posts.json';
import '../styles/PostList.css';

class PostList extends React.Component{
    render(){
        return(
            <div class = "profile">
            {PostData.map((postDetail, index)=>{
                return <div>
                    <h1 class = "celebName">{postDetail.title}</h1>
                    <p class = "description">{postDetail.content}</p>
                    <img class = "celebPic" src = {postDetail.img}/>
                    <img src = "../images/positive.JPG" alt = "smiley"/>
                    </div>

                    
            })}
                    
            </div>
        )
    }
}

export default PostList;