<template>
    <main>
        <tareas></tareas>
    </main>
</template>

<script>
import tareas from './components/tareas'
export default {
  components: {tareas},
  data () {
    return {
    }
  },
  computed:{
    nombre(){
      return this.$store.state.nombre;
    }
  }
}
</script>

