import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/store';

class Root extends React.Component {
    state = {  }
    render() { 
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Root;