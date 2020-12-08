import React from 'react';
import '../App.css';


class NavRefresh extends React.Component {
    constructor(props) {
        super(props)

        
    }
    
    render() {
        return <button  onClick={this.props.getLaunches} 
                        className="buttonSpecial">
                            {this.props.detail}
                   <img src={this.props.icon} 
                        className="buttonIcon"/>
               </button>;
    }
    
}

export default NavRefresh;