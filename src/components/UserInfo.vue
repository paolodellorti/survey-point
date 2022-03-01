<template>
  <div class="mainTitle">
    <div class="title" @click="$router.push({ name: 'Home' })">
      <h3>Paolo Dell'Orti</h3>
      <h6># 457384V</h6>
    </div>
    <el-avatar icon="el-icon-user-solid" :size="50"></el-avatar>  
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>
  .mainTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #000;
    padding: 10px 0;
  }
  .title {
    cursor: pointer;
  }
  .title>h3 {
    margin-bottom: 0;
    margin-right: 50px;
  }
  .title>h6 {
    margin-top: 0;
    text-align: left;
    color: #C0C4CC;
  }
</style>
