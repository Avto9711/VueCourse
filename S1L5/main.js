var app =  new Vue({
    el:'main',
    data:{
        mensaje:'Hola a todos, amo Vue js',
        personas: [
            {
                nombre:'Luis Manuel',
                edad: 20,
                registrado:false
            },
            {
                nombre:'Mario Martinez',
                edad: 13,
                registrado:true
            },
            {
                nombre:'Stanley Lara',
                edad: 37,
                registrado:false
            },
            {
                nombre:'Emmanuel Jimenez',
                edad: 23,
                registrado:true
            }
         ]
    },
    methods:{
        personasMayores:function(){
            return this.personas.filter(x=>x.edad >= 18);
        }
    },
    computed:{
        mensajeReverso: function(){
            return this.mensaje.split('').reverse().join('');
        },
        personasMayores: function(){
            return this.personas.filter(x=>x.edad >= 18);
        },
        personasRegistrados: function(){
            return this.personas.filter(x=>x.registrado);
        }
    }
})