

/* --- ACTIONS --- */
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';



export function login(email, password) {
	console.log("Login Function Call");
	return dispatch => {
		dispatch(isLoginPending(true));
		dispatch(isLoginSuccess(false));
		dispatch(isLoginFailure(null));
		
		
		callLogon(email, password, error => {
			dispatch(isLoginPending(false));
			if (!error) {
				dispatch(isLoginSuccess(true));
			} else {
				dispatch(isLoginFailure(error));
			}
		});
	};
}
function isLoginPending(isLoginPending) {
	return {
		type: LOGIN_PENDING,
		isLoginPending
	};
}
function isLoginSuccess(isLoginSuccess) {
	return {
		type: LOGIN_SUCCESS,
		isLoginSuccess
	};
}

function isLoginFailure(isLoginFailure) {
	return {
		type: LOGIN_FAILURE,
		isLoginFailure
	};
}
function callLogon(email, password, callback) {
	setTimeout(() => {
		if (email === "store@example.com" && password === "admin") {
			return callback(null);
		} else {
			return callback(new Error("Logon Error"));
		}
	}, 1000);
}
/* --- REDUCERS --- */
export default function reducer(
	state = {
		isLoginSuccess: false,
		isLoginPending: false,
		isLoginFailure: null,
		
	},
	action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoginSuccess: action.isLoginSuccess
			});

		case LOGIN_PENDING:
			return Object.assign({}, state, {
				isLoginPending: action.isLoginPending
			});
		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isLoginFailure: action.isLoginFailure
			});

		default:
			return state;
	}
}

