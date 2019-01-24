
var eventBus  = new Vue()
Vue.component('persona', {
    props: {
        persona: {
            type:Object,
            required:true
        },
    },
    template: `<div>
                    <span> {{ persona.nombre }} - </span> 
                    <small>{{persona.genero}} -</small> 
                    <button @click="eliminarPersona(persona)" >Eliminar</button>
                </div>`,
    methods: {
            eliminarPersona(persona){
                //this.$emit("eliminarPersona",persona.nombre)
                //Utilizando el Event Bus para emitirlo.
                eventBus.$emit("eliminarPersonaPorNombre",persona.nombre)
            }
    }
});

Vue.component('personas', {
    props: {
        personas:{
            type:Array,
            required:true
        }
    },
    template: `<ul>
                    <li v-for="persona in personas"> 
                        <persona v-bind:persona="persona" @eliminarPersona='removerPersona'></persona> 
                    </li>
                </ul>`,
    methods: {
        removerPersona: function(nombrePersona){
           var indice =  this.personas.findIndex(x=>x.nombre == nombrePersona );
           this.$emit('remover-persona-por-indice',indice)
        }
    }
});

new Vue({
    el: 'main',

    data: {
        personas: [
            {nombre:"Rene Gonzalez", genero:"Masculino"},
            {nombre:"Stanley Lara", genero:"Masculino"},
            {nombre:"Margarita Fernandez", genero:"Femenino"},
        ],
    },
    mounted:function(){
        //Escucuchando por el evento.   
        eventBus.$on("eliminarPersonaPorNombre", (nombrePersona)=>{   
        var indice =  this.personas.findIndex(x=>x.nombre == nombrePersona );
        this.personas.splice(indice,1);

    })
    } ,
    methods:{
        removerPersonaPorIndice:function(indice){
            this.personas.splice(indice,1);
        }
    }
});