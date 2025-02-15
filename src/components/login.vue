<template>
    <img class="logo" src="../assets/todologo.png" />
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="Email" placeholder="Email"  id="Email" name="Email">
        <input type="password" v-model="Password" placeholder="Password"  id="Password" name="Password">
        <button v-on:click="Login" type="submit" name="submit">Login</button>
        <p> Do you want to create an account? <router-link to="/signup"> Sign Up</router-link></p>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return{
                Email: '',
                Password: ''
            }
        },
        medthods:{ 
            Login(){
                console.warn(this.Email,this.Password); //ayaw nito gumana
            }
        },
        mounted(){
        //If the user has no account, it will go directly to signup page (This will be act as landing page).
        /*let users = localStorage.getItem('user-info');
        if(!users){
            this.$router.push({name:'SignUp'})
        }*/
    }
    };
</script>