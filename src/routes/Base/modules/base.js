/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_BASE_ALL = 'GETALL'
export const REQUEST_BASE_FOUR_DMZ = 'BASE_FOUR_DMZ'
export const REQUEST_BASE_FOUR_NORMAL = 'BASE_FOUR_NORMAL'
export const REQUEST_BASE_FIVE_ONE = 'BASE_FIVE_ONE'
export const REQUEST_BASE_FIVE_TWO = 'BASE_FIVE_TWO'
export const REQUEST_BASE_FIVE_THREE = 'BASE_FIVE_THREE'
export const REQUEST_BASE_SIX_MDC = 'BASE_SIX_MDC'
export const REQUEST_BASE_SIX_BIZ = 'BASE_SIX_BIZ'
export const REQUEST_BASE_EIGHT = 'BASE_EIGHT'
export const REQUEST_BASE_ELEVEN = 'BASE_ELEVEN'
export const REQUEST_BASE_AVID = 'BASE_AVID'
export const REQUEST_BASE_TV = 'BASE_TV'
export const REQUEST_BASE = 'REQUEST_BASE'
export const RECIEVE_BASE = 'RECIEVE_BASE'
export const SHOW_BASE = 'SHOW_BASE'
// ------------------------------------
// Actions
// ------------------------------------

export function requestBase (style: string): Action {
  return {
    type: style
  }
}

export function recieveBase (system, value: string): Action {
  return {
    type: RECIEVE_BASE,
    system: system,
    value: {
      value
    }
  }
}

export function showBase (system: string): Action {
  return {
    type: SHOW_BASE,
    aim: system
  }
}

export const fetchBase = (system: string): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestBase(system))

    return fetch(`/bases/${system}`)
      .then(data => data.text())
      .then(text => dispatch(recieveBase(system, eval('(' + text + ')'))))
  }
}

export const actions = {
  requestBase,
  recieveBase,
  fetchBase,
  showBase
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_BASE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_TV]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_AVID]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_ELEVEN]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_EIGHT]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_ALL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_SIX_BIZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_SIX_MDC]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_FIVE_THREE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_FIVE_TWO]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_FIVE_ONE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_FOUR_NORMAL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BASE_FOUR_DMZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_BASE]: (state, action) => {  
    return ({...state, fetching: false, tables: {type: action.system, value: action.value.value}, current: {type: action.system, value: action.value.value}})
  },
  [SHOW_BASE]: (state, action) => {
    return ( state.current.type !== undefined && state.current.type !== action.aim ) ? ( action.aim === 'GETALL' ? {...state, current: {type: action.aim, value: state.tables.value}} : { ...state, current: {type: action.aim, value: state.tables.value.filter((item) => item.system === action.aim)}}) : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = { fetching: false, current: [], tables: {} }

export default function baseReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
