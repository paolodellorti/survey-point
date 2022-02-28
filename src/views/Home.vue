<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <div>
      <h3>Welcome,</h3>
      <br>
      <h1>{{ userName }}</h1>
      <br>
      <h3>swipe to start editing your survey-point</h3>
    </div>
    <slide-unlock
      ref="vueslideunlock"
      :auto-width="false"
      :circle="true"
      :disabled="false"
      :noanimate="false"
      :width="400"
      :height="60"
      text="start"
      success-text="let's start"
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
</style>