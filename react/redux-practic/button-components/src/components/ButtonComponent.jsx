import React from 'react';
import './ButtonComponent.css';

class ButtonComponent extends React.Component {
    state = {  }
    handleDown = () => {
        const { changeColor } = this.props;
        changeColor(true)
    }
    handleUp = () => {
        const { changeColor } = this.props;
        changeColor(false)
    }
    render() { 
        let { color } = this.props;
        return (
            <div>
                <button 
                onTouchStart={this.handleDown} 
                onTouchEnd={this.handleUp} 
                style={{backgroundColor: color ? 'green' : 'red'}}
                className="button" >button</button>
            </div>
        );
    }
}
 
export default ButtonComponent;