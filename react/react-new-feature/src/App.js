import React from 'react';
import Concurrentmode from './Concurrentmode/index';
import StateHook from './hook/stateHook';
// import Index from './hook/prepareForEffectHook';
import Index from './hook/ReducerHook';
import UseEffect from './hook/effectHook';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Concurrentmode />
    <Index></Index>
    // <StateHook></StateHook>
    // <UseEffect></UseEffect>
  );
}

export default App;
