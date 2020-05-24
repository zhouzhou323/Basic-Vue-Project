<template>
    <div>
        <h2>我是组件的标题</h2>
        <p>我是组件的内容哈哈哈</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
    name:'Cpn',
    data(){
        return{
            name:'CPN'}
    }
}
</script>

<style scoped>
    body{
        color: hotpink;
    }
</style>