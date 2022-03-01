<template>
  <div>
      <user-info />
      <div class="main" v-loading="isLoading">
        <h2>Modifica domanda</h2>
        <input-form 
            :question-text="questionData.text" 
            :question-type="questionData.type" 
            button-type="confirmEdit"
            @deleteQuestion="handleDelete"
            @confirm="handleSubmit"
            v-if="!isLoading"
        />
      </div>
  </div>
</template>

<script>
import BottomController from '../components/BottomController.vue'
import InputForm from '../components/InputForm.vue'
import UserInfo from '../components/UserInfo.vue'
import axios from 'axios'

export default {
    components: { 
        UserInfo,
        BottomController,
        InputForm 
    },
    data() {
        return {
            questionData: {},
            isLoading: true
        }
    },
    methods: {
        handleDelete() {
            // axios
            //     .delete(`https://devapi.claster.it/api/v2/work-areas/${this.$route.params.idWA}/survey-points/${this.$route.params.idSP}/questions/${this.$route.params.idQU}`)
            //     .then(this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } }))
            //     .catch(err => console.log(err))
            // questo è quello che farei se funzionasse l'endpoint, in questo caso torno semplicemente indietro:
        this.$message({
            showClose: true,
            message: 'Domanda eliminata correttamente',
            type: 'success'
            });
        this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } })
        },
        handleSubmit(reqBody) {
            // axios
            //     .put(`https://devapi.claster.it/api/v2/work-areas/${this.$route.params.idWA}/survey-points/${this.$route.params.idSP}/questions/${this.$route.params.idQU}`, reqBody[0])
            //     .then(this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } }))
            //     .catch(err => console.log(err))
            // questo è quello che farei se funzionasse l'endpoint, in questo caso torno semplicemente indietro:
        
        this.$message({
            showClose: true,
            message: 'Domanda modificata correttamente',
            type: 'success'
            });
        this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } })
        }
    },
    mounted() {
        // axios
        //   .get(`https://devapi.claster.it/api/v2/work-areas/${this.$route.params.idWA}/survey-points/${this.$route.params.idSP}/questions/${this.$route.params.idQU}`)
        //   .then(res => this.questionData = { ...res.data.resource })
        //   .catch(err => console.log(err))
        // questo è quello che farei se funzionasse l'endpoint, in questo caso:
        axios
            .get('https://my-json-server.typicode.com/paolodellorti/survey-point/db')
            .then(res => {
                this.questionData = res.data.resource.questions.find(question => question.id === this.$route.params.idQU)
                this.isLoading = false

            })
            .catch(err => console.log(err))
    }

}
</script>