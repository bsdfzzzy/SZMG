/*import HomeView from './components/HomeView'

export default {
  component: HomeView
}*/


import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/home',
  getComponent (nextState, next) {
    require.ensure([
      './containers/HomeContainer',
      './modules/home'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Home = require('./containers/HomeContainer').default
      const homeReducer = require('./modules/home').default

      injectReducer(store, {
        key: 'home',
        reducer: homeReducer
      })

      next(null, Home)
    })
  }
})