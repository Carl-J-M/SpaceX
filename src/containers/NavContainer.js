import React from 'react';
import '../App.css';
import Logo from '../components/Logo.js';
import NavRefresh from '../components/NavRefresh.js';
import Button from '../components/Button.js';
import refresh from '../assets/refresh.png';

class NavContainer extends React.Component {
    render() {
        return(
        <div className="logoContainer flex row">
            <Logo/>
            <NavRefresh detail="Reload Data" icon={refresh}/>
        </div>

        );
      }
}


export default NavContainer;