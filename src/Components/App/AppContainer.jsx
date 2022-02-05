import { connect } from "react-redux";
import orderBy from 'lodash/orderBy';

import App from "./App";

import { setFilter } from "../../Redux/Reducers/filterReducer";
import { setBooks } from "../../Redux/Reducers/booksReducer";

//========================================================================================================================================================

const sortBy = (books, filterBy, searchQuery) => {
    books = books.filter(obj =>
        obj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        obj.author.toLowerCase().includes(searchQuery.toLowerCase()))

    switch (filterBy) {
        case 'all': {
            return books;
        }
        case 'price_high': {
            return orderBy(books, 'price', 'desc')
        }
        case 'price_low': {
            return orderBy(books, 'price', 'asc')
        }
        case 'author': {
            return orderBy(books, 'author', 'asc')
        }
        default: {
            return books;
        }
    }
}

const MapStateToProps = (state) => {
    return {
        books: state.booksReducer.items && sortBy(
            state.booksReducer.items,
            state.filterReducer.filterBy,
            state.filterReducer.searchQuery,
        ),
        isReady: state.booksReducer.isReady,
    }
}

const MapDispatchToProps = {
    setBooks,
    setFilter,
}

//========================================================================================================================================================

export default connect(MapStateToProps, MapDispatchToProps)(App);
