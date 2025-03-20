<template>
<Header />
    <h1> Hello {{ Fname }} {{ Lname }}, Welcome to Home Page!</h1>
    <table border="1px">
        <tr>
            <td>ID</td>
            <td>Todo Name</td>
            <td>Todo Content</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in todo" :key="item.id">
            <td>
                {{ item.id }}
            </td>
            <td>
                {{ item.todoName }}
            </td>
            <td>
                {{ item.todoContent }}
            </td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteTodo(item.id)"> Delete </button>
            </td>

        </tr>
    </table>
</template>
<script>
import { ref } from "vue";
import Header from "./header.vue"
import axios from 'axios';
export default {
    name:'home',
    data(){
        return{
            Fname:'',
            Lname:'',
            todo:[],
        }
    },
    components:{
        Header 
    },
    methods:{
        async deleteTodo(id){
            let result =await axios.delete("http://localhost:3000/todo/"+id);
            console.warn(result)
            if(result.status==200){
                this.loadData()
            }
        },
        async loadData(){
                    //the user will directly access the login page if localStorage has stored data.
        let users = localStorage.getItem('user-info');
        this.Fname = JSON.parse(users).Fname;
        this.Lname = JSON.parse(users).Lname;
        if(!users){
            this.$router.push({name:'login'})
        }
        let result =await axios.get("http://localhost:3000/todo");
        this.todo=result.data;
        }
    },
    async mounted(){
        this.loadData();
    }
}
</script>

<style>
    td{
        width: 160px;
        height: 40px;
    }
</style>