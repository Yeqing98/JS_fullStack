import React from 'react';
import loadingImg from './loading.gif';

class Loading extends React.Component {
    state = {  }
    render() { 
        const { show, title } = this.props
        return (
            <div className="loading-container" style={{display: show ? '' : 'none'}} >
                <div className="loading-wrapper">
                    <img src={loadingImg} width="18px" width="18px" alt=""/>
                    <div className="loading-title">
                        { title }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Loading;