import { connect } from 'react-redux';
import ShowList from '../components/showList/showList';
import { showList } from '../redux/action';

const mapStateToprops = (state) => {
    return {
        currentList: state.addList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showOneList: (index) => {
            dispatch(showList(index))
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(ShowList);