const initState = {
	isAuthenticated: false,
	user: {}
};

const isEmpty = (value) => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	);
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
			//	isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		case 'LOGIN_FAILUREE':
			return {
				...state,
				authError: "Login Fail"
			}
		case 'LOGIN_SUCCESS':
			return {
				...state,
				isAuthenticated: !state.isAuthenticated,
			//	authError: action.payload.errors
			}
		case 'LOGOUT_SUCCESS':
			console.log('log out success');
			return {
				...state,
				authError: null,
				isAuthenticated: !isEmpty(action.payload)
			}
		default:
			return state;
	}
}

export default authReducer;