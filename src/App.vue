<template>
  <div id="app">
    <router-view class="router" />
  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: "Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router {
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
