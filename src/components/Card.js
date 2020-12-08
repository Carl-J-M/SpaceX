import React from 'react';
import '../App.css';

class Card extends React.Component {
        render() {
            return (
                <div className="flex row card cardMaster">
                    <div className="number">#{this.props.number}</div>
                    <div className="title">{this.props.title}</div>
                        <div className="flex column right cardSubcontainer">
                            <div className="date">{this.props.date}</div>
                            <div className="rocketID">{this.props.rocketID}</div>
                        </div>
                </div>
                );
        }
}

export default Card;