import React from 'react';
import '../App.css';
import Card from '../components/Card.js';
import Button from '../components/Button.js';
import select from '../assets/select.png';
import sort from '../assets/sort.png'; 
import splashImage from '../assets/launch-home.png';

class LaunchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }

        this.getLaunches = this.getLaunches.bind(this);
    }
    componentDidMount() {
        this.getLaunches();
      }
    getLaunches() {
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then((data) => {
          this.setState({ launches: data })
        })
        .catch(console.log)
      }
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
                        
        {
            this.state.launches.map(launch => {
                 return <Card number={launch.flight_number} title={launch.mission_name} date={launch.launch_date_utc} rocketID={launch.rocket.rocket_name}/>
             })}

                    </div>
            </div>
        );
      }
}


export default LaunchContainer;