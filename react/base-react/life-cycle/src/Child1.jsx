import React from 'react';

class Child1 extends React.Component{
    state = {
        a: 1
    }
    /**
     * 更新 state
     * 根据返回值  {}
     * null
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return {
            ...props,
            ...state
        };
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return 888;
    }
    // 15.xx版本    a undefined
    // 16.xx版本    a === getSnapshotBeforeUpdate()
    componentDidUpdate(preProps, preState, a) {
        console.log('componentDidUpdate',a);
    }

    handleStateChange = () => {
        this.setState({
            a:10
        })
    }
    render() {
        const { count } = this.props
        console.log(this.props.count);
        console.log('渲染时候 state', this.state);
        return(
            <div>
                <button onClick={this.handleStateChange}>change State</button>
                Child1 Component
                count: { this.props.count }
            </div>
        )
    }
}

export default Child1;