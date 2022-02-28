<template>
  <div>
    <h3>Paolo Dell'Orti</h3>
    <el-avatar icon="el-icon-user-solid" :size="50"></el-avatar>  
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #000;
    padding: 10px 0;
  }
  h3 {
    margin-right: 50px;
  }
</style>
