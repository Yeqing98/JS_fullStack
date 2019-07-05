import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Miniplayer.styl';

class Miniplayer extends React.Component {
    state = {  }
    handleShow = () => {
        if( true || this.props.song.url) {
            this.props.showMiniPlayer();
        }
    }
    render() { 
        const { showStatus } = this.props;
        let playerStyle = {};
        if(showStatus) playerStyle = { display: 'none' }
        return (
            <div className="mini-player" style={playerStyle} onClick={this.handleShow} >
                mini player
            </div>
        );
    }
}
 
export default Miniplayer;