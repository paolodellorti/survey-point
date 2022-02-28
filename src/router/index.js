import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SurveyPointEdit from '../views/SurveyPointEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#/work-area/:idWA/survey-point/:idSP/edit/',
    name: 'SurveyPointEdit',
    component: SurveyPointEdit
  }
]

const router = new VueRouter({
  routes
})

export default router
