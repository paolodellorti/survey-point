<template>
  <div id="app">
    <router-view class="router" />
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
@media only screen and (max-width: 600px) {
  .router {
    padding: 5px 10px;
  }
}
</style>
