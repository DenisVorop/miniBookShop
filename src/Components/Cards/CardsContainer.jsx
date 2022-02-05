import { connect } from 'react-redux';

import { addBook, removeBook } from "../../Redux/Reducers/cartReducer";

import Cards from './Cards';

//========================================================================================================================================================

const MapStateToProps = (state, { id }) => {
    return {
        addedCount: state.cartReducer.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
    }
};

const MapDispatchToProps = {
    addBook,
    removeBook,
}

//========================================================================================================================================================

export default connect(MapStateToProps, MapDispatchToProps)(Cards);
