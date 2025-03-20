<template>
    <Header />
        <h1> Hello {{ Fname }} {{ Lname }}, Welcome to Add Todo Page!</h1>
        <form class="add">
            <input type="text" name="todoName" placeholder="Enter todo Name" v-model="todo.todoName"/>
            <input type="text" name="todoContent" placeholder="Enter todo" v-model="todo.todoContent"/>
            <button type="button" v-on:click="addTodo"> Add new todo </button>
        </form>
    </template>
    <script>
    import { ref } from "vue";
    import Header from "./header.vue"
    import axios from 'axios'
    export default {
        name:'Add',
        components:{
            Header 
        },
        data(){
            return{
                Fname:'',
                Lname:'',
                todo :{
                    todoName:'',
                    todoContent:''
                }
            }
        },
        methods:{
           async addTodo(){
                console.warn(this.todo)
                const result =await axios.post("http://localhost:3000/todo",{
                    todoName:this.todo.todoName,
                    todoContent:this.todo.todoContent,
                });
                if(result.status==201){
                    this.$router.push({name:'home'})    ;
                }
                console.warn("result",result)
            }
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