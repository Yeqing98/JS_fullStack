import React from 'react';
import propTypes from 'prop-types'

class MyButtom extends React.Component{
    render() {
        return(
            <button style={{backgroundColor: this.context.color}}>
                { this.props.children }
            </button>
        )
    }
}
MyButtom.contextTypes = {
    color: propTypes.string
}

class Message extends React.Component{
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return(
            <div style={{color: this.context.color}}>
                { this.props.text }
                <MyButtom>delete</MyButtom>
            </div>
        )
    }
}
Message.contextTypes = {
    color: propTypes.string
}

class Context extends React.Component{
    state = {
        msgs: ['msg1', 'msg2', 'msg3'],
        theme: 'purple'
    }
    getChildContext() {
        return {color: this.state.theme}
    }
    handleToggleTheme = () => {
        this.setState({
            theme:'red'
        })
    }
    render() {
        const msgNode = this.state.msgs.map((msg, i) => {
            return (<Message text={msg} />)
        })
        return(
            <div>
                <button onClick={this.handleToggleTheme}>切换主题</button>
                {/* 接受父组件传递的参数 */}
                { this.props.children }
                {msgNode}
            </div>
        )
    }
}
Context.childContextTypes = {
    color: propTypes.string
}
// react 提供了一个类型的npm 包  


export default Context;