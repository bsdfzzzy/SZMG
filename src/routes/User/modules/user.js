/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const GETALL = 'GETALL'
export const ADDONE = 'ADDONE'
export const UPDATEACCOUNT = 'UPDATEACCOUNT'
export const UPDATEAPASSWORD = 'UPDATEAPASSWORD'
export const UPDATEUSERNAME = 'UPDATEUSERNAME'
export const UPDATEPRIORITY = 'UPDATEPRIORITY'

// ------------------------------------
// Actions
// ------------------------------------

export function recieveUser (users) {
  return {
    type: GETALL,
    users: users
  }
}

export function addOne (user) {
  return {
    type: ADDONE,
    user: user
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
    type: UPDATEAPASSWORD,
    password: password
  }
}

export function updateUsername (username) {
  return {
    type: UPDATEUSERNAME,
    username: username
  }
}

export function updatePriority (priority) {
  return {
    type: UPDATEPRIORITY,
    priority: priority
  }
}

export function addOne (text) {
  return {
    type: ADDONE,
    err: text.err || '',
    user: text.add || {}
  }
}

export const fetchGetUser = () => {
  return (dispatch: Function): Promise => {
    return fetch('/users/GETALL')
      .then(data => data.text())
      .then(text => dispatch(recieveUser(eval('(' + text + ')'))))
  }
}

export const fetchAddUser = (user) => {
  user = JSON.stringify(user)
  return (dispatch) => {
    return fetch('/users/addOne', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      } ,
      body: user
    })
      .then(data => data.json())
      .then(text => dispatch(addOne(text)))
  }
}

export const actions = {
  recieveUser,
  fetchGetUser,
  fetchAddUser,
  updateAccount,
  updatePassword,
  updateUsername,
  updatePriority
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GETALL]: (state, action) => {
    return ({ ...state, users: action.users })
  },
  [ADDONE]: (state, action) => {
    return ({...state, users: state.users.concat(action.user), add: action.user !== '' ? action.user : {err: action.err}})
  },
  [UPDATEACCOUNT]: (state, action) => {
    return ({...state, add: {...state.add, account: action.account}})
  },
  [UPDATEAPASSWORD]: (state, action) => {
    return ({...state, add: {...state.add, password: action.password}})
  },
  [UPDATEUSERNAME]: (state, action) => {
    return ({...state, add: {...state.add, username: action.username}})
  },
  [UPDATEPRIORITY]: (state, action) => {
    return ({...state, add: {...state.add, priority: action.priority}})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { users: [], add: {} }
export default function eventReducer (state = initialState, action: Action){
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
