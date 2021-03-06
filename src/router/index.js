import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from "../components/EventDetails.vue";
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'About',
    props: (route) => ({ showExtra: route.query.e }),
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
