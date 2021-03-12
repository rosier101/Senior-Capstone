import React from 'react';
import '../styles/Header.css';
import { MenuItems } from './MenuItems';
//import '../../styles/footer.css';
//import { Button } from './Button';

class Header extends React.Component {
  render() {
    return (
      //This contains the whole header and navbar
      <div className='NavbarItems'>
        {/*Logo on the left hand side of the header*/}
        <a href='/' className='header-logo'>
          <img src=''></img>
        </a>

        
        <div className='top'>
          <p id='title'>Celebrity Sentiment Analysis</p>

          {/*Log in and Sign Up button on header*/}
          {/*<div id='header-button'>
            <Button>LOG IN</Button>
            <Button>SIGN UP</Button>
    </div>*/}
        </div>
        {/*</nav> */}
        <div className='menu-icon' onClick={this.handleClick}></div>

        {/*This contains what is in the header */}
        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={MenuItems.cName} href={MenuItems.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
