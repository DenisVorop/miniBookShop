import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';

import { setSearchQuery } from "../../Redux/Reducers/filterReducer";

import Menu from './Menu';

import './Menu.scss';

//========================================================================================================================================================

const MapStateToProps = (state) => {
    return {
        totalPrice: state.cartReducer.items.reduce((total, book) => total + book.price, 0),
        count: state.cartReducer.items.length,
        items: uniqBy(state.cartReducer.items, obj => obj.id),
    }
}

const MapDispatchToProps = {
    setSearchQuery
}

//========================================================================================================================================================

export default connect(MapStateToProps, MapDispatchToProps)(Menu);
