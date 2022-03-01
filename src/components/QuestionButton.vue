<template>
  <el-button  class="button" type="primary" :icon="icon" @click="$emit('clickQuestion')">
      {{ question.text.length <= 45 ? question.text : (question.text.substr(0, 40) + '...' )}}
  </el-button>
</template>

<script>
export default {
    name: 'QuestionButton',
    props: {
        question: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            icon: '',
        }
    },
    mounted() {
        switch (this.question.type) {
            case 'PROVINCE':
                this.icon = 'el-icon-location-outline'
                break;
            case '5_STARS':
                this.icon = 'el-icon-star-off'
                break;
            case '3_EMOJIS':
                this.icon = 'el-icon-user'
                break;
        }
    }
}
</script>

<style>
.button {
  width: 100%;
  margin: 30px 0 !important;
}
</style>