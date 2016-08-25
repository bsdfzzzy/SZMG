import { injectReducer } from '../../store/reducers'

export default (store) => ({
  onEnter: (nextState, replace) => {
    if (!store.getState().home || !store.getState().home.isLogin) {
      replace('/home')
    }
  },
  path: 'event',
  getComponent (nextState, next) {
    require.ensure([
      './containers/EventContainer',
      './modules/event'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Event = require('./containers/EventContainer').default
      const reducer = require('./modules/event').default

      injectReducer(store, { key: 'event', reducer })

      next(null, Event)
    })
  }
})
