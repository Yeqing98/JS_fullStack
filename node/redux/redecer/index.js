const { combineReducers } = require('redux');
const filmReducer = require('./filmReducer.js');
const filmFiterReducer = require('./filmFiter.js');
module.exports = combineReducers({
    films: filmReducer,
    filter: filmFiterReducer
})