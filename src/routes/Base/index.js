import { injectReducer } from '../../store/reducers'

export default (store) => ({
  onEnter: (nextState, replace) => {
    console.log(store.getState())
    if (!store.getState().home || !store.getState().home.isLogin) {
      replace('/home')
    }
  },
  path: 'base',
  getComponent (nextState, next) {
    require.ensure([
      './containers/BaseContainer',
      './modules/base'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Base = require('./containers/BaseContainer').default
      const baseReducer = require('./modules/base').default

      injectReducer(store, { 
        key: 'base', 
        reducer: baseReducer
      })

      next(null, Base)
    })
  }
})