
Vue.component('usuarios',{
    props:[''],
    // template:'#template-usuarios',
    /*template: `
            <section>
                <h1>Usuarios</h1>
                <div v-for="usuario in usuarios">
                    <span>{{usuario.name}} -  </span>
                    <span>{{usuario.username}} - </span>
                    <span>{{usuario.email}} - </span>
                    <button type="Button" v-on:click="borrarUsuario(usuario)">Eliminar</button>
                </div>

                <template v-if="usuariosBorrados.length">
                    <h1>Usuarios Borrados</h1>
                    <div v-for="usuario in usuariosBorrados">
                        <span>{{usuario.name}}   </span>
                    </div>
                </template>
            </section>
    
    `,*/
    data: function(){
        return { 
            usuarios: [],
            usuariosBorrados: []
        }
        
    },
    mounted:function(){
        this.cargarLista();
},
    methods:{
        cargarLista(){
            axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
                this.usuarios = response.data;
            }).catch(response => {
                    console.error("Error en el request");
            })
        },
        borrarUsuario(usuario){
                var indice = this.usuarios.findIndex(x=>x.id == usuario.id);
                var usuarioBorrado = this.usuarios.splice(indice,1)[0];
                this.usuariosBorrados.push(usuarioBorrado);
        }
    }
})

var app =  new Vue({
    el:'main',
})

