<template>
  <div>
    <user-info />
    <div class="about">
      <i v-if="isLoading" class="el-icon-loading"></i>
      <div v-else>
        <h1>{{ surveyPointData.name }}</h1>
        <p v-if="!Object.keys(this.surveyPointData).length">
          Qui non ci sono ancora domande, puoi usare il tasto + per aggiungerne.
        </p>
        <question-button v-for="question in surveyPointData.questions" :key="question.id" :question="question.type" />
      </div>
    </div>
    <bottom-controller button-type="add" />
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import QuestionButton from '../components/QuestionButton.vue'
import BottomController from '../components/BottomController.vue'
import axios from 'axios'

export default {
  name: 'SurveyPointEdit',
  components: {
    UserInfo,
    QuestionButton,
    BottomController
  },
  data() {
    return {
      surveyPointData: {},
      isLoading: true
    }
  },
  mounted() {
    console.log(Object.keys(this.surveyPointData).length);
    // axios
    //   .get(`https://devapi.claster.it/api/v2/work-areas/${this.$route.params.idWA}/survey-points/${this.$route.params.idSP}`)
    //   .then(res => this.surveyPointData = { ...res.data.resource })
    // questo è quello che farei se funzionasse l'endpoint, in questo caso:
    axios
      .get('https://my-json-server.typicode.com/paolodellorti/survey-point/db')
      .then(res => {
        this.surveyPointData = { ...res.data.resource }
        this.isLoading = false
      })
  }
  
}
</script>

<style scoped>
i {
  position: absolute;
  top: 45%;
}
</style>