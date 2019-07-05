import { connect } from 'react-redux';
import Input from '../components/input/Input';
import { addList } from '../redux/action';

const mapStateToprops = (state) => {
    return {
        currentList: state.addList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOneList: (status) => {
            // 
            dispatch(addList(status))
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Input);