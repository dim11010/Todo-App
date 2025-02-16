<template>
    <img class="logo" src="../assets/todologo.png" />
    <h1>Login</h1>
    <div class="login">
      <input
        type="email"
        v-model="Email"
        placeholder="Email"
        id="Email"
        name="Email"
      />
      <input
        type="password"
        v-model="Password"
        placeholder="Password"
        id="Password"
        name="Password"
      />
      <button @click="login" type="submit" name="submit">Login</button>
      <p>
        Do you want to create an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from 'axios'
  export default {
    name: "Login",
    data(){
        return {
            Email:'',
            Password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?Email=${this.Email}&Password=${this.Password}`
        )
            if(result.status==200 && result.data.length>0){
                //alert("Signed Up Successfully!");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
            console.warn(result);
        }
    },
    mounted(){
        //the user will directly access the home page if localStorage has stored data.
        let users = localStorage.getItem('user-info');
        if(users){
            this.$router.push({name:'home'})
        }
    }
  };
  </script>
 