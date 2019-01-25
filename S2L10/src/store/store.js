import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)
export const store =  new Vuex.Store({
    state:{
        tareas:[
            {nombre:'Aprender Vue', completada:true} ,
            {nombre:'Aprender Css', completada:false},
            {nombre:'Comprar comida', completada:false}
        ],
        tareasBackend:[]
    },
    getters:{
        tareasCompletadas: (state)=>{
            return state.tareas.filter(x=>x.completada).length;
        }
    },
    mutations:{
        agregarTarea:(state, tarea)=>{
          var newTarea =  JSON.parse(JSON.stringify(tarea));
            state.tareas.push(newTarea);
        },
        addTareasBackend:(state, tareasBackend)=>{
                state.tareasBackend =  tareasBackend;
        }
    },
    actions:{
        traerTareas:(context)=>{
            axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
                context.commit("addTareasBackend",response.data);
            })

        }
    }
})