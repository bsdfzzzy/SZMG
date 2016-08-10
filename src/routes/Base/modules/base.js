/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_BASE_ALL = 'BASE_GETALL'
export const REQUEST_BASE_FOUR_DMZ = 'REQUEST_BASE_FOUR_DMZ'
export const REQUEST_BASE_FOUR_NORMAL = 'REQUEST_BASE_FOUR_NORMAL'
export const REQUEST_BASE_FIVE_ONE = 'REQUEST_BASE_FIVE_ONE'
export const REQUEST_BASE_FIVE_TWO = 'REQUEST_BASE_FIVE_TWO'
export const REQUEST_BASE_FIVE_THREE = 'REQUEST_BASE_FIVE_THREE'
export const REQUEST_BASE_SIX_MDC = 'REQUEST_BASE_SIX_MDC'
export const REQUEST_BASE_SIX_BIZ = 'REQUEST_BASE_SIX_BIZ'
export const REQUEST_BASE_EIGHT = 'REQUEST_BASE_EIGHT'
export const REQUEST_BASE_ELEVEN = 'REQUEST_BASE_ELEVEN'
export const REQUEST_BASE_AVID = 'REQUEST_BASE_AVID'
export const REQUEST_BASE_TV = 'REQUEST_BASE_TV'
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

let availableId = 0
export function recieveBase (value: string): Action {
  return {
    type: RECIEVE_BASE,
    value: {
      value,
      id: availableId++
    }
  }
}

export function showBase (system: string): Action {
  return {
    type: SHOW_BASE,
    aim: system
  }
}

export const fetchBase = (style: string): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestBase(style))

    return fetch(`/bases/${style}`)
      .then(data => data.text())
      .then(text => dispatch(recieveBase(text)))
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
    return ({...state, fetching: false, tables: state.tables.concat({type: action.type, value: action.value}), current: {type: action.type, value: action.value}})
  },
  [SHOW_BASE]: (state, action) => {
    return state.current.type !== action.aim ? ({ ...state, current: state.tables.find((system) => system.type === aim)}) : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = { fetching: false, current: [], tables: [] }

export default function baseReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
