<template>
    <main>
        <h1>Tareas completadas {{tareasCompletadas}}</h1>
        Nombre tarea<input v-model="tareaNueva.nombre" type="text"/>
        <br>
        Completada? <input v-model="tareaNueva.completada" type="checkbox" name="" id="">
        <br>
        <button type="button" @click="agregarTarea">Agregar</button>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.nombre">
                    {{tarea.nombre}} - Completada ? {{tarea.completada}}
            </li>
        </ul>

        <br>
        <hr>
        <ul>
            <li v-for="tarea in tareasBackend" :key="tarea.title" > {{tarea.title}}</li>
        </ul>
    </main>
</template>
<script>
    export default {
        data(){
            return {
                    tareaNueva:{
                        nombre:'',
                        completada:false
                    }
            }
        },
        mounted(){
                this.$store.dispatch("traerTareas");
        },
        computed:{
            tareas(){
                return this.$store.state.tareas;
            },
            tareasCompletadas(){
                return this.$store.getters.tareasCompletadas 
            },
            tareasBackend(){
                return this.$store.state.tareasBackend;

            }
        },
        methods:{
            agregarTarea(){
                this.$store.commit("agregarTarea", this.tareaNueva);
                this.tareaNueva.nombre = '';
                this.tareaNueva.completada = false;

            }
        }
    }
</script>

