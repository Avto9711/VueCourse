Vue.component('persona', {
    props: {
        nombre:{
            type:String,
            default:"Sin nombre"
        },
        edad:[ String,Number ]
    },
    template: `<div><h1> {{ nombre }} </h1></div>`,
    methods: {

    }
});

new Vue({
    el: 'main',
    data: {
        nombre: 'Luis Jose',
    },
    methods:{
        onCambiarValor:function(newName){
            this.nombre =  newName;
        }
    }
});