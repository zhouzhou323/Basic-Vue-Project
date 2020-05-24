<template>
    <div>
        <button @click='btnClick'></button>
        <h2 class="title">{{message}}</h2>
        <p>{{name}}</p>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    name:'App',
    components:{
        Cpn,
    },
    data(){
        return{
            message:'xuanyu is always sleeping',
            name:'webpack'
        }
    },
    methods:{
        btnClick(){
            console.log('it works!')
    }
    }

}
</script>

<style scoped>
.title{
    color: green;
}
</style>