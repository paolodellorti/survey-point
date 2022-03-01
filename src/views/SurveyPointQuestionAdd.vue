<template>
  <div>
      <user-info />
      <h2>Inserisci nuova domanda</h2>
      <input-form 
          button-type="confirmAdd"
          @confirm="handleSubmit"
      />
  </div>
</template>

<script>
import BottomController from '../components/BottomController.vue'
import InputForm from '../components/InputForm.vue'
import UserInfo from '../components/UserInfo.vue'

export default {
    name: 'SurveyPointQuestionAdd',
    components: { 
        UserInfo,
        BottomController,
        InputForm 
    },
    methods: {
        handleSubmit(reqBody) {
            // axios
            //     .post(`https://devapi.claster.it/api/v2/work-areas/${this.$route.params.idWA}/survey-points/${this.$route.params.idSP}/questions/${this.$route.params.idQU}`, reqBody[0])
            //     .then(this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } }))
            //     .catch(err => console.log(err))
            // questo è quello che farei se funzionasse l'endpoint, in questo caso torno semplicemente indietro:
        
        this.$message({
            showClose: true,
            message: 'Domanda inserita correttamente',
            type: 'success'
            });
        this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } })
        }
    }
}
</script>