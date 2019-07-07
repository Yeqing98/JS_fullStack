import React from 'react';
import ButtonComponent from './components/ButtonComponent';
import ProgressBar from './components/ProgressBar';
import './App.css';

class App extends React.Component {
  state = {
    color: false,
    progress: 150
  }
  handleChange = (val) => {
    this.setState({
      color: val,
      
    })
  }
  handleMove = (progress) => {
    if(progress > 300) {
      this.setState({
        progress: 300
      })
    }else if(progress < 0) {
      this.setState({
        progress: 0
      })
    }else {
      this.setState({
        progress: progress
      })
    }
  }
  render() { 
    const { color, progress } = this.state;

    return (
      <div>
        <ButtonComponent changeColor={this.handleChange} color={color} ></ButtonComponent> 
        <ProgressBar point={progress} moveBar={this.handleMove} ></ProgressBar>
      </div>
    );
  }
}
 
export default App;
