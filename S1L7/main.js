

var app =  new Vue({
    el:'main',
    data:{
        mensaje: 'hola desde instancia 1'
    },
    updated:function(){
        console.log("El valor del modelo ha cambiado")
    },
    methods: {
        saludarYCambiarValor:function(){
            this.mensaje = "Hola humano, te estoy saludando";
            app2.mensaje = "Hola humano, te saludo desde la instancia 1";
        }
    }
})
var app2 =  new Vue({
    el:'#app2',
    data:{
        mensaje: 'hola desde instancia 2'
    }
})