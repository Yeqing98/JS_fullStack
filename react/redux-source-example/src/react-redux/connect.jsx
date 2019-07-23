import React, { Component } from 'react';
import { Consumer } from './context'

export default (mapStateToParops, mapDispatchToProps) => (Wrappedcomponent) => {
    class ConnectdComponent extends Component{
        render () {
            return (
                <Consumer>
                    {
                        (store) => {
                            const state = store.state;
                            const dispatch = store.dispatch;
                            let filterProps = {}
                            if(typeof mapDispatchToProps === 'function') {
                                Object.assign(filterProps, mapDispatchToProps(dispatch));
                            }
                            if(typeof mapStateToParops === 'function') {
                                Object.assign(filterProps, mapStateToParops(state));
                            }
                            
                            return (
                                <Wrappedcomponent {...filterProps}  />
                            )
                            
                        }
                    }
                </Consumer>
            )
        }
    }
    return ConnectdComponent;
}