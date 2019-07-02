import React, { Component } from 'react';
import { getCarousel } from '../../api/recommend'

class Recommend extends Component {
  state = {  }
  componentDidMount() {
      getCarousel().then(res => {
          console.log('res', res);
      })
  }
  render() { 
    return ( 
      <div>
        recommend
      </div>
     );
  }
}
 
export default Recommend;
