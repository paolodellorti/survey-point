<template>
  <el-button  class="button" type="primary" :icon="icon">
      {{ text }}
  </el-button>
</template>

<script>
export default {
    name: 'QuestionButton',
    props: {
        question: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            icon: '',
            text: ''
        }
    },
    mounted() {
        console.log(this.question);
        switch (this.question) {
            case 'PROVINCE':
                this.icon = 'el-icon-location-outline'
                this.text = 'Selezione provincia'
                break;
            case '5_STARS':
                this.icon = 'el-icon-star-off'
                this.text = 'Votazione con stelle'
                break;
            case '3_EMOJIS':
                this.icon = 'el-icon-user'
                this.text = 'Votazione con 3 faccine'
                break;
        }
    }
}
</script>

<style>
.button {
  width: 100%;
  margin: 30px 0 !important;
  font-size: 1.3rem;
}
</style>