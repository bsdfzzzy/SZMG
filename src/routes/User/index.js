import { injectReducer } from '../../store/reducers'

export default (store) => ({
  onEnter: (nextState, replace) => {
    if (!store.getState().home || !store.getState().home.isLogin) {
      replace('/home')
    }
  },
  path: 'user',
  getComponent (nextState, next) {
    require.ensure([
      './containers/UserContainer',
      './modules/user'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const User = require('./containers/UserContainer').default
      const reducer = require('./modules/user').default

      injectReducer(store, { key: 'user', reducer })

      next(null, User)
    })
  }
})
