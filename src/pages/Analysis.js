import React from 'react';
import Header from "../components/Header";
import PostList from "../posts/PostList";

class Analysis extends React.Component{
    render(){
        return(
            <div>
<Header/>
<PostList/>
            </div>
        )
    }
}

export default Analysis;