const initState = {
		credentials: {},
		error: {}
};

const registerReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case 'REGISTER':
            return {
                ...state,
                credentials: payload
            }
        case 'REGISTER_ERROR':
						return {
							...state,
							error: payload
						}
        default:
            return state;
    }
}

export default registerReducer;