Vue.component('persona', {
    props: ['nombre', 'edad'],
    template: `<div><h1> {{ nombre }} </h1><button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        cambiarProp() {
            //this.nombre = this.nombre.toUpperCase();
        }
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