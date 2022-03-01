<template>
  <div id="app">
    <router-view class="router" />
  </div>
</template>

<style>
#app {
  font-family: "Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
.router {
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
}
.main {
  margin-bottom: 60px;
}
</style>
