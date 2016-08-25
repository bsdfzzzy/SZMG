// ------------------------------------
// Constants
// ------------------------------------

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGINERR = 'LOGINERR'
export const UPDATEACCOUNT = 'UPDATEACCOUNT'
export const UPDATEPASSWORD = 'UPDATEPASSWORD'

// ------------------------------------
// Actions
// ------------------------------------

export function logIn (admin): Action {
  return {
    type: LOGIN,
    admin: admin
  }
}

export function logInErr (err) {
  return {
    type: LOGINERR,
    err: err 
  }
}

export function logOut () {
  return {
    type: LOGOUT,
  }
}

export function updateAccount (account) {
  return {
    type: UPDATEACCOUNT,
    account: account
  }
}

export function updatePassword (password) {
  return {
    type: UPDATEPASSWORD,
    password: password
  }
}

export const fetchLogIn = (admin) => {
  let data = {"account": admin.account, "password": admin.password}
  data = JSON.stringify(data)
  return (dispatch: Function): Promise => {
    return fetch('/users/login', { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      } ,
      body: data
    })
      .then(data => data.json())
      .then(text => dispatch(logIn(text.admin)))
      .catch(err => dispatch(logInErr(err)))
  }
}

export const fetchLogout = () => {
  return (dispatch) => {
    return fetch('/users/logout')
      .then(data => data.json())
      .then(text => dispatch(logOut()))
      .catch(err => console.log(err))
  }
}

export const actions = {
  logIn,
  logOut,
  logInErr,
  fetchLogIn,
  updateAccount,
  updatePassword
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LOGIN]: (state, action) => {
    return ({ ...state, isLogin: true, admin: action.admin, err: '' })
  },
  [LOGINERR]: (state, action) => {
    return ({ ...state, err: action.err })
  },
  [LOGOUT]: (state, action) => {
    return ({ ...state, isLogin: false, admin: '', err: '' })
  },
  [UPDATEACCOUNT]: (state, action) => {
    return ({...state, account: action.account})
  },
  [UPDATEPASSWORD]: (state, action) => {
    return ({...state, password: action.password})
  }
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState = { isLogin: false, admin: '', err: '', account: '', password: '' }

export default function bizReducer (state: BizStateObject = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}