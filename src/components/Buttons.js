import React from 'react';
import '../styles/Buttons.css';

class Buttons extends React.Component {
    render () {
        return (

        <div>
            <h1>Choose A Profile</h1>
            
            {//Different Types of Buttons for each profile
            }
            <div class="container">
    <div class="center">
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Kim Kardashian</span>
      </button>
    </div>

    <div class = "btn2">
        <a href="#" class="btn-flip" data-back="Kardashian" data-front="Kim"></a>
        </div>
    
  </div>
            
        </div>




        
            )

        
    }
}

export default Buttons;