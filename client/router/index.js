import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Spotify from '../views/Spotify'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/demo1',
      component: Spotify
    }
  ]
})
