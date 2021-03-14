import React from 'react';
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import SearchBox from "../components/SearchBox";



class Home extends React.Component{
    render(){
        return(
            <div>
<Header/>
<SearchBox/>
<h1>This is the home page!</h1>
<Buttons/>
            </div>
        )
    }
}

export default Home;