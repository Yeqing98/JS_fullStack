import React from 'react';
import Input from './container/Input';
import ShowList from './container/showList';

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
        <Input />
        <ShowList />
      </div>
    );
  }
}

export default App;
