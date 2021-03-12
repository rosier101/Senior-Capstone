import React from 'react';
import Header from "../components/Header";
import PostList from "../posts/PostList";

class Analysis extends React.Component{
    render(){
        return(
            <div>
                <img src = "../images/positive.JPG" alt = "smiley"/>
                <img src = "angry.png" alt = "angry"/>
                <img src = "angry.png" alt = "angry"/>
<Header/>
<PostList/>
            </div>
        )
    }
}

export default Analysis;