import React from 'react';
import Header from "../components/Header";
import PostList from "../posts/PostList";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";


class Analysis extends React.Component{
    render(){
        return(
            <div>
                
<Header/>
<PostList/>
<Chart2/>

            </div>
        )
    }
}

export default Analysis;