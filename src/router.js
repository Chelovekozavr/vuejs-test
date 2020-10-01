import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ContactDetails from '@/components/ContactDetails'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/:id',
      component: ContactDetails,
      name: 'ContactDetails',
      props: true
    }
  ]
})
