<template>
    <div :class="{active: active, dark: dark}">
           <header>
        <nav>
            <a href="#">Where in the world ?</a>
            <a @click="active = !active, dark = !dark" class="moon">   <i  :class="{'fas fa-moon':dark, 'far fa-moon':active }"></i> Dark Mode</a>
        </nav>
    </header>
      <slot></slot>

  </div>
</template>

<script>

export default {
  components:{
     
  },
  data() {
      return {
          active:true,
          dark:false
      }
  }
}
</script>

<style>

</style>