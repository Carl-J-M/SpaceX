import React from 'react';
import '../App.css';
import Card from '../components/Card.js';
import Button from '../components/Button.js';
import NavRefresh from '../components/NavRefresh.js';
import refresh from '../assets/refresh.png';
import select from '../assets/select.png';
import sort from '../assets/sort.png'; 
import splashImage from '../assets/launch-home.png';

class LaunchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            buttonText: "Sort Descending"
        }

        this.getLaunches = this.getLaunches.bind(this);
        this.handler = this.handler.bind(this);
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
      handler() {
        let tempLaunches = this.state.launches;
        if(this.state.buttonText == "Sort Descending"){
            tempLaunches.sort((a,b) => (a.flight_number > b.flight_number) ? 1 : ((b.flight_number > a.flight_number) ? -1 : 0)); 
            this.setState({
              launches: tempLaunches,
              buttonText: "Sort Ascending"
            })
        } else {
            tempLaunches.sort((a,b) => (a.flight_number > b.flight_number) ? 1 : ((b.flight_number > a.flight_number) ? -1 : 0)).reverse(); 
            this.setState({
              launches: tempLaunches,
              buttonText: "Sort Descending"
            })
        }

        console.log(this.state.launches);
      }
      
    render() {
        return (
            <div className="flex">
                    <div className="leftHand">
                    <img src={splashImage} alt="Image of the SpaceX Falcony Heavy rocket." className="splashImage"/>
                    </div>
                    <div className="rightHand cardContainer">
                        <div className="flex row buttonContainer">
                            <NavRefresh detail="Reload Data" icon={refresh} getLaunches={this.getLaunches}/>
                            <Button detail="Filter By Year" icon={select} />
                            <Button detail={this.state.buttonText} icon={sort} handler={this.handler}/>
                        </div>        
        {
            this.state.launches.map(launch => {
                 return <Card key={launch.rocket.rocketID} number={launch.flight_number} title={launch.mission_name} date={launch.launch_date_utc} rocketID={launch.rocket.rocket_name}/>
             })}

                    </div>
            </div>
        );
      }
}


export default LaunchContainer;