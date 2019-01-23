

var app =  new Vue({
    el:'main',
    data:{
        tareas: 
        [
            {
                nombre:'Aprender Vue',
                prioridad:1,
                terminada:false
            },
            {
                nombre:'Comprar pan',
                prioridad:3,
                terminada:false
            },
            {
                nombre:'Traer leche',
                prioridad:4,    
                terminada:false
            },
        ]
    },
    methods:{
        alternarValores(tarea){
            tarea.terminada = !tarea.terminada;
        }
    }
})
