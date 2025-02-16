<template>
    <img class="logo" src="../assets/todologo.png" />
    <h1>Sign Up</h1>
    <div class="signup">
        <input type="text" v-model="Fname" placeholder="First Name" id="Fname" name="Fname">
        <input type="text" v-model="Mname" placeholder="Middle Name"  id="Mname" name="Mname">
        <input type="text" v-model="Lname" placeholder="Last Name"  id="Lname" name="Lname">
        <input type="email" v-model="Email" placeholder="Email"  id="Email" name="Email">
        <input type="password" v-model="Password" placeholder="Password"  id="Password" name="Password">
        <button v-on:click="signUp" type="submit" name="submit">Sign Up</button>
        <p> Already have an account? <router-link to="/login"> Login</router-link></p>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    name :'SignUp',
    data()
    {
        return {
            Fname: '',
            Mname: '',
            Lname: '',
            Email: '',
            Password: ''
        }
    },
    methods:{   
        async signUp()
        {
           // console.warn("signup", this.Fname, this.Mname, this.Lname, this.Email, this.Password)
            let result = await axios.post("http://localhost:3000/users", {
                Fname:this.Fname,
                Mname:this.Mname,
                Lname:this.Lname,
                Email:this.Email,
                Password:this.Password
            });

            console.warn(result);
            if(result.status==201){
                //alert("Signed Up Successfully!");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'login'})
            }
        }
    },
    mounted(){
        //after signing up, it will go directly to login page.
        let users = localStorage.getItem('user-info');
        if(users){
        this.$router.push({name:'login'})
        
        }
    }
}
</script>
