<template>
    <img class="logo" src="../assets/todologo.png" />
    <h1>Sign Up</h1>
    <div class="signup">
        <input type="text" v-model="Fname" placeholder="First Name" id="Fname" name="Fname">
        <input type="text" v-model="Mname" placeholder="Middle Name"  id="Mname" name="Mname">
        <input type="text" v-model="Lname" placeholder="Last Name"  id="Lname" name="Lname">
        <input type="email" v-model="Email" placeholder="Email"  id="Email" name="Email">
        <input type="password" v-model="Password" placeholder="Password"  id="Lname" name="Passwprd">
        <button v-on:click="signUp" type="submit" name="submit">Sign Up</button>
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
                alert("Signed Up Successfully!");
                localStorage.setItem("user-info",JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style>
    .logo{
        width: 100px;
        height: 100px;
    }
        
    .signup input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 10px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #21AB91;

    }

    .signup button{
        width: 325px;
        height: 40px;
        border: 1px solid #21AB91;
        background-color: #21AB91;
        color: #fff;
        cursor: pointer;
    }
</style>