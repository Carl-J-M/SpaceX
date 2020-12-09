import React from 'react';
import '../App.css';
import Card from '../components/Card.js';
import Button from '../components/Button.js';
import NavRefresh from '../components/NavRefresh.js';
import refresh from '../assets/refresh.png';
import sort from '../assets/sort.png';
import splashImage from '../assets/launch-home.png';
import 'react-dropdown/style.css';

class LaunchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      buttonText: "Sort Descending",
      dropdownOptions: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      defaultOption: "Filter By Year"
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
    if (this.state.buttonText == "Sort Ascending") {
      tempLaunches.sort((a, b) => (a.flight_number > b.flight_number) ? 1 : ((b.flight_number > a.flight_number) ? -1 : 0));
      this.setState({
        launches: tempLaunches,
        buttonText: "Sort Descending"
      })
    } else {
      tempLaunches.sort((a, b) => (a.flight_number > b.flight_number) ? 1 : ((b.flight_number > a.flight_number) ? -1 : 0)).reverse();
      this.setState({
        launches: tempLaunches,
        buttonText: "Sort Ascending"
      })
    }
  }

  onChange = e => {
    const valueSelectedByUser = parseInt(e.target.value);
    let basicLaunches = this.state.launches;
    let formattedLaunches = basicLaunches.map(launch => {
      if (launch.launch_date_utc.substring(0, 4) == valueSelectedByUser) {
        return launch;
      }
    })
    var filtered = formattedLaunches.filter(function (el) {
      return el != null;
    });
    this.setState({
      launches: filtered
    })
  }

  render() {
    return (
      <div className="flex">
        <div className="leftHand">
          <img src={splashImage} alt="Image of the SpaceX Falcony Heavy rocket." className="splashImage" />
        </div>
        <div className="rightHand cardContainer">
          <div className="flex row buttonContainer">
            <NavRefresh detail="Reload Data" icon={refresh} getLaunches={this.getLaunches} />
            <select onChange={this.onChange} className="dropdown">
              {this.state.dropdownOptions.map(year => {
                return <option value={year}>{year}</option>
              })}
            </select>
            <Button detail={this.state.buttonText} icon={sort} handler={this.handler} />
          </div>
          {
            this.state.launches.map(launch => {
              return <Card key={launch.rocket.rocketID} number={launch.flight_number} title={launch.mission_name} date={launch.launch_date_utc} rocketID={launch.rocket.rocket_name} />
            })}

        </div>
      </div>
    );
  }
}

export default LaunchContainer;