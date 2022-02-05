const SET_FILTER = 'filterReducers/SET_FILTER';
const SET_SEARCH_QUERY = 'filterReducers/SET_SEARCH_QUERY';

//========================================================================================================================================================

const initialState = {
    filterBy: 'all',
    searchQuery: '',
}

//==========REDUCER==============================================================================================================================================

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                filterBy: action.filter,
            }
        }
        case SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.value,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTIONS============================================================================================================================================

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter,
    }
}
export const setSearchQuery = (value) => {
    return {
        type: SET_SEARCH_QUERY,
        value,
    }
}

//========================================================================================================================================================

export default filterReducer;
