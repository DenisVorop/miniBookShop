const ADD_BOOK = 'cartReducer/ADD_BOOK';
const REMOVE_BOOK = 'cartReducer/REMOVE_BOOK';

//========================================================================================================================================================

const initialState = {
    items: [],
}

//==========REDUCER==============================================================================================================================================

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK: {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case REMOVE_BOOK: {
            return {
                ...state,
                items: state.items.filter(obj => obj.id !== action.payload),
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTIONS============================================================================================================================================

export const addBook = (obj) => {
    return {
        type: ADD_BOOK,
        payload: obj,
    }
}
export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id,
    }
}

//========================================================================================================================================================

export default cartReducer;
