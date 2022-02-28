<template>
  <div class="controller">
      <div></div>
      <el-button type="danger" icon="el-icon-back" size="small" circle @click="back()"></el-button>
      <el-button type="success" :icon="icon" circle ></el-button>
  </div>
</template>

<script>
export default {
    name: 'BottomController',
    props: {
        buttonType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            icon: ''
        }
    },
    mounted() {
        this.icon = this.buttonType === 'add' ? 'el-icon-plus' : 'el-icon-check'
    },
    methods: {
        back: function() {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style scoped>
    .controller {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 20px;
        z-index: 99;
        width: 100%;
        left: 0;
    }
</style>