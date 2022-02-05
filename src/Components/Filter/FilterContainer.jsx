import { connect } from 'react-redux';

import Filter from './Filter';

//========================================================================================================================================================

const MapStateToProps = (state) => {
    return {
        filterBy: state.filterReducer.filterBy,
    }
};

const MapDispatchToProps = {
}

//========================================================================================================================================================

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
