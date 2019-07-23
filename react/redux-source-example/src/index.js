import React from 'react';
import ReduxThunk from 'redux-thunk';
import thunk from './redux-thunk/index';
import Provide from './react-redux/Provide';
import Count from './count';
import ContextDemo from './contextDemo';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { createStore, combineReducers, applyMiddleware } from './redux/index';

function foo(state = 0, action) {
	switch (action.type) {
		case 'ADD':
			return state + 1;
		case 'DE':
			return state - 1;
		default:
			return state;
	}
}
function bar(state = 'INIT', action) {
	switch (action.type) {
		case 'CHANGE':
			return action.content;
		default:
			return state;
	}
}
const index = combineReducers({
	foo,
	bar
})
const logger = ({ dispatch, getState }) => next => action => {
	console.log('[logger]即将执行：', action);
	const res = next(action);
	console.log('[logger]执行完毕', res);
	return res;
}

const store = createStore(index, applyMiddleware(logger, thunk));
class Home extends React.Component {
	handleAdd = () => {
		store.dispatch({
			type: 'ADD'
		})
	}
	handleAddAsync = () => {
		const asyncAdd = (dispatch) => {
			setTimeout(() => {
				dispatch({
					type: 'ADD'
				})
			}, 1000)
			
		}
		store.dispatch(asyncAdd);
	}
	render() {
		const reduxStore = store.getState();
		return (
			
			<div>
				<Count />
				foo: {reduxStore.foo}
				bar: {reduxStore.bar}
				<button onClick={this.handleAdd}> + </button>
				<button onClick={this.handleAddAsync}>async add</button>
			</div>
			
		)
	}
}



function countReducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}
const store1 = createStore(countReducer);
// store1.subscribe(() => {
// 	console.log(store1.getState());
// })
ReactDOM.render(
	<Provide store={store1}>
		<Home />
	</Provide>, 
document.getElementById('root'));
store.subscribe(() => {
	ReactDOM.render(<Home />, document.getElementById('root'));
})
