import React from 'react';
import PostData from '../data/posts.json';

class PostList extends React.Component{
    render(){
        return(
            <div>
                
            {PostData.map((postDetail, index)=>{
                return <div>
                    <h1>{postDetail.title}</h1>
                    <p>{postDetail.content}</p>
                    </div>
            })}

            </div>
        )
    }
}

export default PostList;