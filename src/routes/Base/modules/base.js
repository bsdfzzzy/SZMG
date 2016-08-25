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
export const RECIEVE_SYSTEM = 'RECIEVE_SYSTEM'
// ------------------------------------
// Actions
// ------------------------------------

export function requestBase (style): Action {
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

export function showBase (system): Action {
  return {
    type: SHOW_BASE,
    aim: system
  }
}

export function recieveSystem (systems) {
  return {
    type: RECIEVE_SYSTEM,
    systems: systems
  }
}

export const fetchBase = (system): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestBase(system))

    return fetch(`/bases/${system}`)
      .then(data => data.text())
      .then(text => dispatch(recieveBase(system, eval('(' + text + ')'))))
  }
}

export const fetchSystem = () => {
  return (dispatch) => {
    return fetch('/systems/GETALL')
      .then(data => data.text())
      .then(text => dispatch(recieveSystem(eval('(' + text + ')'))))
  }
}

export const actions = {
  requestBase,
  recieveBase,
  fetchBase,
  showBase,
  recieveSystem,
  fetchSystem
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_BASE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_BASE]: (state, action) => {  
    return ({...state, fetching: false, tables: {type: action.system, value: action.value.value}, current: {type: action.system, value: action.value.value}})
  },
  [SHOW_BASE]: (state, action) => {
    return ( state.current.type !== undefined && state.current.type.id !== action.aim ) ? ( action.aim === 'GETALL' ? {...state, current: {type: action.aim, value: state.tables.value}} : { ...state, current: {type: action.aim, value: state.tables.value.filter((item) => item.systemId === action.aim)}}) : state
  },
  [RECIEVE_SYSTEM]: (state, action) => {
    return ({...state, systems: action.systems})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = { fetching: false, current: [], tables: {}, systems: [] }

export default function baseReducer (state = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
