<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      path:'/home/news'
    }
  },
  created(){
    console.log('home created');
  },
  destroyed(){
    console.log('home destroyed')
  },
  activated(){
    // console.log('home activated')
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next){
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
}
</script>
