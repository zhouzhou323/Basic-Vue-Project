<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag='li' replace>Home</router-link> |
      <router-link to="/about" tag="li" replace>About</router-link> -->
      <!-- <button @click="btnHome">Home</button>
      <button @click='btnAbout'>About</button> -->

      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link :to="'/user/'+userId">User</router-link>
      <router-link :to="{path:'profile', query:{name:'zhouzhou',age:'23'}}">Profile</router-link>
      <!-- <router-link to="/profile">Profile</router-link> -->

      <button @click='btnProfile'>profile</button>
      <button @click='btnUser'>user</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      userId:'xuanyu'
    }
  },
   methods:{
    btnHome(){
      this.$router.push('/home')
      console.log("go back home")
    },
    btnAbout(){
      this.$router.push('/about')
      console.log("about me")
    },
    btnUser(){
      this.$router.push('/user/' + this.userId)
    },
    btnProfile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'zhouzhou',
          age:'23'
        }
      })
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active{
  color: red;
}
</style>
