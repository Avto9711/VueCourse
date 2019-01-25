<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPersona.nombre"></h1>
            <h2 v-text="datosPersona.correoe"></h2>
            <img :src="datosPersona.foto">
        </template>    

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
            return {
                persona:null
            }
        },  
        mounted(){
            axios.get("https://randomuser.me/api").then(response=>{
                this.persona = response.data.results[0]
            })
        },
        computed: {
            datosPersona() {
                return {
                    nombre: `${this.persona.name.first} ${this.persona.name.last}`,
                    foto: this.persona.picture.large,
                    correoe: this.persona.email,
                }
            }
        }
    }

</script>

