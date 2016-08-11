import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'biz',
  getComponent (nextState, next) {
    require.ensure([
      './containers/BizContainer',
      './modules/biz'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Biz = require('./containers/BizContainer').default
      const bizReducer = require('./modules/biz').default

      injectReducer(store, {
        key: 'biz',
        reducer: bizReducer
      })

      next(null, Biz)
    })
  }
})
