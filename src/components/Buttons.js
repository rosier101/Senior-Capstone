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
            <div class="shop-items">
                <div class="shop-item">
                  <span class="shop-item-title">Kim Kardashian</span>
                  <img class="shop-item-image" src = "/images/KimK.jpg" alt = "smiley"/>
                    <div class="shop-item-details">
                    <div class="center">
                      <button class="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                        <span>Kim Kardashian</span>
                      </button>
                    </div>
                    </div>

                </div>
              </div>


                      
                        <div class="shop-items">
                          <div class="shop-item">
                          <span class="shop-item-title">The Rock</span>
                          <img class="shop-item-image" src = "/images/TheRock.jpg" alt = "smiley"/>
                          <div class="shop-item-details">
                          <div class="center">
                          <div class = "btn2">
                          <a href="#" class="btn-flip" data-back="Rock" data-front="The"></a>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          
    
          
          
          
          
          </div>
            
        </div>




        
            )

        
    }
}

export default Buttons;