import React from 'react';
import '../App.css';


class Button extends React.Component {
    
    handleClick() {
        console.log('Click happened');
      }
        render() {
            return <button onClick={this.props.handler} className="buttonStandard">{this.props.detail}<img src={this.props.icon} className="buttonIcon"/></button>;

            
        }
}

export default Button;