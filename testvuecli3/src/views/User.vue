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
    }
}
</script>

<style scoped>

</style>