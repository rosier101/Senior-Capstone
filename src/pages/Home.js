import React from 'react';
import Header from "../components/Header";
import Buttons from "../components/Buttons";


class Home extends React.Component{
    render(){
        return(
            <div>
<Header/>
<h1>This is the home page!</h1>
<Buttons/>
            </div>
        )
    }
}

export default Home;