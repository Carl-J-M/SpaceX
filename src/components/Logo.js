import React from 'react';
import '../App.css';
import logo from '../assets/spaceX.png';

class Logo extends React.Component {
        render() {
            return (
                <div className="flex">
                    <img src={logo} alt="Logo" className="logo"/>
                    <h3>LAUNCHES</h3>
                </div>
            )
        }
}
export default Logo;