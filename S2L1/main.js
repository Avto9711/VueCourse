


Vue.component('tareas',{
    props:[''],
    template: `
        <ul>
            <li v-for="todo in todos">{{todo.title}}</li>
        </ul>
    `,
    data: function(){
        return { 
            todos: []
        }
        
    },
    mounted:function(){
        this.cargarLista();
},
    methods:{
        cargarLista(){
            axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
                this.todos = response.data;
            }).catch(response => {

            })
        }
    }
})

var app =  new Vue({
    el:'main',
})

