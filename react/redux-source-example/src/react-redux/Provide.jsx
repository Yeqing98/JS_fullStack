import React, { Component } from 'react';
import { Provide } from './context';

class EnhancedProvide extends Component {
    constructor(props) {
        super(props);
        const { store } = this.props;
        this.state = {
            state: store.getState(),
            dispatch: store.dispatch
        }
        store.subscribe(() => {
            this.setState({
                state: store.getState(),
            })
        })
    }
    render() {
        
        const { state, dispatch } = this.state;
        return (
            <Provide value={{state, dispatch}} >
                { this.props.children }
            </Provide>
        );
    }
}
 
export default EnhancedProvide;