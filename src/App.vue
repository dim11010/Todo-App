<template>
  <router-view />
</template>

<script>



export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
        width: 100px;
        height: 100px;
    }
      
.login input, .signup input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 10px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #21AB91;

    }

.login button, .signup button{
        width: 325px;
        height: 40px;
        border: 1px solid #21AB91;
        background-color: #21AB91;
        color: #fff;
        cursor: pointer;
    }
</style>
