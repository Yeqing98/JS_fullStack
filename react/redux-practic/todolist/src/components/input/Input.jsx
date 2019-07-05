import React from 'react';

class Input extends React.Component {
    state = {
        val: ''
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            val: e.target.value
        })
    }
    handleAdd = (val) => {
        return () => {
            
            this.props.addOneList({title: val, show: true})
            console.log(this.props)
            // console.log(this.props)
        }
    }
    render() {
        const { val } = this.state;
        return (
            <div>
                <input type="text" value={val} onChange={this.handleChange} />
                <button onClick={this.handleAdd(val)} >add</button>
            </div>
        );
    }
}

export default Input;