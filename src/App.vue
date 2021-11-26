<template>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->

  <router-view/>
</template>

<style>
@import './assets/css/app.css';

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>


export default {
  components:{},

}
</script>
