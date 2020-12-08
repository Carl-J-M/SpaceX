import React from 'react';
import '../App.css';


class NavRefresh extends React.Component {
    handleClick() {
        console.log('Click happened');
      }
    render() {
        return <button onClick={() => this.handleClick()} className="buttonSpecial">{this.props.detail}<img src={this.props.icon} className="buttonIcon"/></button>;

    }
    
}

export default NavRefresh;