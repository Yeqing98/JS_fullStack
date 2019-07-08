import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    state = {  }
    handleStart = (e) => {
        // console.log(e.touches[0].clientX)
        const { moveBar } = this.props
        let pointX = e.touches[0].clientX;
        return moveBar(pointX)
    }
    handleMove = (e) => {
        // console.log(e.touches[0].clientX)
        const { moveBar } = this.props
        let pointX = e.touches[0].clientX;
        return moveBar(pointX)
    }
    handleEnd = (e) => {
        // console.log(e.changedTouches[0].clientX)
        const { moveBar } = this.props
        let pointX = e.changedTouches[0].clientX;
        return moveBar(pointX)
    }
    render() { 
        const { point } = this.props
        // console.log(this.props)
        return (
            <div className="progressBar">
                <div className="progress"></div>
                <div 
                className="bar"
                onTouchStart={this.handleStart}
                onTouchMove={this.handleMove}
                onTouchEnd={this.handleEnd}
                style={{left: point }} ></div>
                <div className="proBackground" style={{width: point}} ></div>
                <div>移动了{point / 3}%</div>
            </div>
        );
    }
}
 
export default ProgressBar;