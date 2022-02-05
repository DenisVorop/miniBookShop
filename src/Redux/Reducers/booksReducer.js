const SET_BOOKS = 'booksReducers/SET_BOOKS';
const SET_IS_READY = 'booksReducers/SET_IS_READY';

//========================================================================================================================================================

const initialState = {
    isReady: false,
    items: null,
}

//==========REDUCER==============================================================================================================================================

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                items: action.items,
                isReady: true,
            }
        }
        case SET_IS_READY: {
            return {
                ...state,
                isReady: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTIONS============================================================================================================================================

export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        items: books,
    }
}

//========================================================================================================================================================

export default booksReducer;
