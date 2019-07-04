import React from 'react';
import './header.styl';

class Header extends React.Component {
    state = {  }
    handleback = () => {
        // if(this.props.history) {
        //     this.props.history.pop()
        // }
        window.history.back();
    }
    render() { 
        return (
            <div className="music-header">
                <span className="header-back" onClick={this.handleback} >
                    <i className="icon-back"></i>
                </span>
                <div className="header-title">
                    { this.props.title }
                </div>
            </div>
        );
    }
}
 
export default Header;