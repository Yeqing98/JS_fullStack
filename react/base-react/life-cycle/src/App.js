import React from 'react';
import logo from './logo.svg';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context'
import Context1 from './Context1'
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild : !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new String Ref';
    this.methodsRef.innerHTML = 'new methods Ref';
    this.objRef.current.innerHTML = 'new Object ref'
  }
  render() {
    const { count } = this.state;
    const { showChild } = this.state;
    return(
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodsRef = ref}>methods ref</span>
        <span ref={this.objRef}>
          object Ref
        </span>
        {/* {innerHTML} */}
        <div dangerouslySetInnerHTML={{
          __html: `<strong>strong</strong>`
        }}>
          
        </div>
        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}>toggle child</button>
        {
          !showChild ? <Child count={count}/> : <Child1 count={count} />
        }
        {/* 在组件里面添加东西， 相当于给组件传参 */}
        <Context >
          小华
          <p>姓名</p>
          19
          <p>年龄</p>
        </Context>
        <Context1>
          <p>react 16.x.x</p>
        </Context1>
      </div>
    )
  }
}

export default App;
