<template>
  <div id="app">
    <div id="nav">
      <h2>--------app---------</h2>
      <h2>{{$store.state.counter}}</h2>
      <button @click="addition">+</button>
      <button @click="subtraction">-</button>

      <h2>---------getters--------</h2>
      <h2>{{$store.getters.powerCounter}}</h2>

      <h2>--------vuex-----------</h2>
      <hello-vuex/>
    </div>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name:'App',
  components:{
    HelloVuex
  },
  methods:{
   addition(){
     this.$store.commit('increment')
   },
   subtraction(){
     this.$store.commit('decrement')
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
