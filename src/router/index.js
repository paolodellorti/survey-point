import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SurveyPointEdit from '../views/SurveyPointEdit.vue'
import SurveyPointQuestionEdit from '../views/SurveyPointQuestionEdit.vue'
import SurveyPointQuestionAdd from '../views/SurveyPointQuestionAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work-area/:idWA/survey-point/:idSP/edit/',
    name: 'SurveyPointEdit',
    component: SurveyPointEdit
  },
  {
    path: '/work-area/:idWA/survey-point/:idSP/questions/:idQU/edit/',
    name: 'SurveyPointQuestionEdit',
    component: SurveyPointQuestionEdit
  },
  {
    path: '/work-area/:idWA/survey-point/:idSP/questions/new/',
    name: 'SurveyPointQuestionAdd',
    component: SurveyPointQuestionAdd
  }
]

const router = new VueRouter({
  routes
})

export default router
