/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_EVENT_ALL = 'GETALL'
export const REQUEST_EVENT_FOUR_DMZ = 'FOUR_DMZ'
export const REQUEST_EVENT_FOUR_NORMAL = 'FOUR_NORMAL'
export const REQUEST_EVENT_FIVE_ONE = 'FIVE_ONE'
export const REQUEST_EVENT_FIVE_TWO = 'FIVE_TWO'
export const REQUEST_EVENT_FIVE_THREE = 'FIVE_THREE'
export const REQUEST_EVENT_SIX_MDC = 'SIX_MDC'
export const REQUEST_EVENT_SIX_BIZ = 'SIX_BIZ'
export const REQUEST_EVENT_EIGHT = 'EIGHT'
export const REQUEST_EVENT_ELEVEN = 'ELEVEN'
export const REQUEST_EVENT_AVID = 'AVID'
export const REQUEST_EVENT_TV = 'TV'
export const REQUEST_EVENT = 'REQUEST_EVENT'
export const RECIEVE_EVENT = 'RECIEVE_EVENT'
export const SHOW_EVENT = 'SHOW_EVENT'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function requestEvent (style: string): Action {
  return {
    type: style
  }
}

let availableId = 0
export function recieveEvent (system, value: string): Action {
  return {
    type: RECIEVE_EVENT,
    system: system,
    value: {
      value
    }
  }
}

export function showEvent (system: string): Action {
  return {
    type: SHOW_EVENT,
    aim: system
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const fetchEvent = (system: string): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestEvent(system))

    return fetch(`/events/${system}`)
      .then(data => data.text())
      .then(text => dispatch(recieveEvent(system, eval('(' + text + ')'))))
  }
}

export const actions = {
  requestEvent,
  recieveEvent,
  fetchEvent,
  showEvent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_EVENT]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_TV]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_AVID]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_ELEVEN]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_EIGHT]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_ALL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_SIX_BIZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_SIX_MDC]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_FIVE_THREE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_FIVE_TWO]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_FIVE_ONE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_FOUR_NORMAL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_EVENT_FOUR_DMZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_EVENT]: (state, action) => {
    return ({...state, fetching: false, tables: {type: action.system, value: action.value.value}, current: {type: action.system, value: action.value.value}})
  },
  [SHOW_EVENT]: (state, action) => {
    return ( state.current.type !== undefined && state.current.type !== action.aim ) ? ( action.aim === 'GETALL' ? {...state, current: {type: action.aim, value: state.tables.value}} : { ...state, current: {type: action.aim, value: state.tables.value.filter((item) => item.system === action.aim)}}) : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { fetching: false, current: [], tables: {} }
export default function eventReducer (state: number = initialState, action: Action){
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
