<template>
<Header />
    <h1> Hello User, Welcome to Home Page!</h1>
</template>
<script>
import { ref } from "vue";
import Header from "./header.vue"
export default {
    name:'home',
    components:{
        Header 
    },
    mounted(){
        //the user will directly access the login page if localStorage has stored data.
        let users = localStorage.getItem('user-info');
        if(!users){
            this.$router.push({name:'login'})
        } 
    }
}
</script>