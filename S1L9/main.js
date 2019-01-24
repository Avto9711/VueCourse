Vue.filter('filtroNombre', function(nombre){
    return `${nombre.title} ${nombre.first} ${nombre.last}`;
})

var app =  new Vue({
    el:'main',
 
    data:{
        personas: []
        
    },
    mounted:function(){
        this.cargarPersonas();
},
    methods:{
        cargarPersonas(tarea){
            axios.get("https://randomuser.me/api/?results=500").then(response => {
                this.personas = response.data.results;
            }).catch(response => {

            })
        }
    }
})
