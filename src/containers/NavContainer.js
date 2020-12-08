import React from 'react';
import '../App.css';
import Logo from '../components/Logo.js';


class NavContainer extends React.Component {
    render() {
        return(
        <div className="logoContainer flex row">
            <Logo/>
        </div>

        );
      }
}


export default NavContainer;