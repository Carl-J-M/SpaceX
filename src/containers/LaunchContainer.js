import React from 'react';
import '../App.css';
import shape from '../assets/launch-home.png';
import Card from '../components/Card.js';

class LaunchContainer extends React.Component {
    render() {
        return (
            <div className="flex">
                    <div className="leftHand">
                    <img src={shape} alt="Image of the SpaceX Falcony Heavy rocket." className="splashImage"/>
                    </div>
                    <div className="rightHand cardContainer">
                        <Card number="1" title="FalconSat" date="24 Mar 2006" rocketID="Falcon 1"/>
                        {/* <Card number="2" title="FalconSat2" date="24 Mar 2007" rocketID="Falcon 2"/> */}
                    </div>
            </div>
        );
      }
}


export default LaunchContainer;