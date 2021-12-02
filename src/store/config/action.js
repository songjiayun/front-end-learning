export function updateCollapsed(args) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_COLLAPSED',
            data: args
        });
    };
}
