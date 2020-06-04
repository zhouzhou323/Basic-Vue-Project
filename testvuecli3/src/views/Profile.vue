<template>
    <div>
        <h2>Profile Page</h2>
        <h3>{{$route.query.name}}</h3>
    </div>
</template>

<script>
export default {
  name:"Profile",
  created(){
    console.log('profile created');
  },
  destroyed(){
    console.log('profile destroyed')
  },
}
</script>