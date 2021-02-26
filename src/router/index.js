import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Donate from '@/components/Donate'
import Faculty from '@/components/Faculty'
import Gallery from '@/components/Gallery'
import Schedule from '@/components/Schedule'
import Rentals from '@/components/Rentals'
import Staff from '@/components/Staff'
import Upcoming from '@/components/Upcoming'
// import Blog from '@/components/Blog'

Vue.use(Router)
Vue.use(VueParallaxJs)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/rentals',
      name: 'Rentals',
      component: Rentals
    },
    {
      path: '/upcoming',
      name: 'Upcoming', 
      component: Upcoming
    },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
})
