import React from 'react';
import '../App.css';
import Card from '../components/Card.js';
import Button from '../components/Button.js';
import select from '../assets/select.png';
import sort from '../assets/sort.png'; 
import splashImage from '../assets/launch-home.png';

class LaunchContainer extends React.Component {
    render() {
        return (
            <div className="flex">
                    <div className="leftHand">
                    <img src={splashImage} alt="Image of the SpaceX Falcony Heavy rocket." className="splashImage"/>
                    </div>
                    <div className="rightHand cardContainer">
                        <div className="flex row buttonContainer">
                            <Button detail="Filter By Year" icon={select}/>
                            <Button detail="Sort Descending" icon={sort}/>
                        </div>
                        <Card number="1" title="FalconSat" date="21 Mar 2007" rocketID="Falcon 1"/>
                        <Card number="2" title="DemoSat" date="24 Mar 2006" rocketID="Falcon 1"/>
                    </div>
            </div>
        );
      }
}


export default LaunchContainer;