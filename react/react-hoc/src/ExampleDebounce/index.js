import React from 'react';
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util';
// 加了一个静态属性 displayName
@decDisplayName('CustomExampleDecbounce')
class ExampleDebounce extends React.Component {
    state = {  }
    @decDebounce(1000)
    handleSubmit() {
        console.log('submit request');
    }
    @decArrowDebounce(1000)
    handleBuy = () => {
        console.log('buy now');
    }
    // handleSubmit = debounce(function() {
    //     console.log('submit request');
    // }, 1000)
    render() { 
        return (
            <div>
                <button onClick={this.handleSubmit} >提交订单</button>
                <button onClick={this.handleBuy} >立即购买</button>
            </div>
        );
    }
}
 
export default ExampleDebounce;