/* @flow */

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_BIZ_ALL = 'GETALL'
export const REQUEST_BIZ_FOUR_DMZ = 'FOUR_DMZ'
export const REQUEST_BIZ_FOUR_NORMAL = 'FOUR_NORMAL'
export const REQUEST_BIZ_FIVE_ONE = 'FIVE_ONE'
export const REQUEST_BIZ_FIVE_TWO = 'FIVE_TWO'
export const REQUEST_BIZ_FIVE_THREE = 'FIVE_THREE'
export const REQUEST_BIZ_SIX_MDC = 'SIX_MDC'
export const REQUEST_BIZ_SIX_BIZ = 'SIX_BIZ'
export const REQUEST_BIZ_EIGHT = 'EIGHT'
export const REQUEST_BIZ_ELEVEN = 'ELEVEN'
export const REQUEST_BIZ_AVID = 'AVID'
export const REQUEST_BIZ_TV = 'TV'
export const REQUEST_BIZ = 'REQUEST_BIZ'
export const RECIEVE_BIZ = 'RECIEVE_BIZ'
export const SHOW_BIZ = 'SHOW_BIZ'

// ------------------------------------
// Actions
// ------------------------------------

export function requestBiz (): Action {
  return {
    type: REQUEST_BIZ
  }
}

let availableId = 0
export function recieveBiz (system, value: string): Action {
  return {
    type: RECIEVE_BIZ,
    value: {
      value
    }
  }
}

export function showBiz (system: string): Action {
  return {
    type: SHOW_BIZ,
    aim: system
  }
}

export const fetchBiz = (system: string): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestBiz(system))

    return fetch(`/bizs/${system}`)
      .then(data => data.text())
      .then(text => dispatch(recieveBiz(system, eval('(' + text + ')'))))
  }
}

export const actions = {
  requestBiz,
  recieveBiz,
  fetchBiz,
  showBiz
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [REQUEST_BIZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_TV]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_AVID]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_ELEVEN]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_EIGHT]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_ALL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_SIX_BIZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_SIX_MDC]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_FIVE_THREE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_FIVE_TWO]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_FIVE_ONE]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_FOUR_NORMAL]: (state) => {
    return ({ ...state, fetching: true })
  },
  [REQUEST_BIZ_FOUR_DMZ]: (state) => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_BIZ]: (state, action) => {
    return ({...state, fetching: false, tables: {type: action.system, value: action.value.value}, current: {type: action.system, value: action.value.value}})
  },
  [SHOW_BIZ]: (state, action) => {
    return ( state.current.type !== undefined && state.current.type !== action.aim ) ? ( action.aim === 'GETALL' ? {...state, current: {type: action.aim, value: state.tables.value}} : { ...state, current: {type: action.aim, value: state.tables.value.filter((item) => item.system === action.aim)}}) : state
  }
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState = { fetching: false, current: [], tables: {} }

export default function bizReducer (state: BizStateObject = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

