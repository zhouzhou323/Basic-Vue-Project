<template>
    <div class="User">
        <h1>I'm zhouzhou</h1>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        userId(){
        //    return this.$router
        //    拿到活跃的router 
           return this.$route.params.userId 
        }
    },
  created(){
    console.log('user created');
  },
  destroyed(){
    console.log('user destroyed')
  },
}
</script>

<style scoped>

</style>