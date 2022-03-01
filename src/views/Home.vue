<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <div class='title'>
      <h2>Bentornato,</h2>
      <h1>{{ userName }}</h1>
      
      <el-descriptions>
        <el-descriptions-item label="ID">
          <el-tag size="small">457384V</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Work Area">
          <el-tag size="small">12</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Survey Point">
          <el-tag size="small">24</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Survey Point Name">
          <el-tag size="small">Terrazza Esterna</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <h5>Fai swipe per accedere al gestore del punto sondaggi</h5>
    </div>
    <slide-unlock
      ref="vueslideunlock"
      :auto-width="false"
      :circle="true"
      :disabled="false"
      :noanimate="false"
      :width="400"
      :height="60"
      text="start to manage"
      success-text="loading"
      @completed="swipeCompleted()"
    />
  </div>
</template>

<script>
import SlideUnlock from "vue2-slide-unlock"

export default {
  name: 'Home',
  data() {
    return {
      userName: ''
    }
  },
  components: {
    SlideUnlock
  },
  methods: {
    swipeCompleted: function() {
      setTimeout(() => this.$router.push({ name: 'SurveyPointEdit', params: { idWA: 12, idSP: 24 } }), 1000)
    }
  },
  mounted() {
    this.userName = "Paolo Dell'Orti" 
  }//in una applicazione reale, qua fetcho i dati utente tramite axios e li assegno alla variabile userName
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  text-align: left;
}
h5 {
  text-align: center;
}
</style>