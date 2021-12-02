const initState = {
    collapsed: false
};

const configReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_COLLAPSED':
            return { ...state, collapsed: action.data };
        default:
            return state;
    }
};

export default configReducer;
