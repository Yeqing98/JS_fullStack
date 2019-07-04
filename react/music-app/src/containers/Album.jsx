import React from 'react';
import { connect } from 'react-redux';
import Album from '../components/album/Album';
import { changeSong } from '../redux/action';


/**
 * container component
 * pure component
 */
const mapStateToprops = (state) => {}
const mapDispatchToprops = (dispatch) => {
    return {
        changeCurrentSong: (song) => {
            dispatch(changeSong(song))
        }
    }
}
export default connect(null, mapDispatchToprops)(Album);
// export default Album;