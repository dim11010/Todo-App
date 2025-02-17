<template>
<Header />
    <h1> Hello {{ Fname }} {{ Lname }}, Welcome to Home Page!</h1>
</template>
<script>
import { ref } from "vue";
import Header from "./header.vue"
export default {
    name:'home',
    data(){
        return{
            Fname:'',
            Lname:''
        }
    },
    components:{
        Header 
    },
    mounted(){
        //the user will directly access the login page if localStorage has stored data.
        let users = localStorage.getItem('user-info');
        this.Fname = JSON.parse(users).Fname;
        this.Lname = JSON.parse(users).Lname;
        if(!users){
            this.$router.push({name:'login'})
        } 
    }
}
</script>