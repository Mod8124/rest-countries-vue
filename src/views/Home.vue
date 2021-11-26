<template>
  <div class="home">
  <div :class="{active: active, dark: dark}">
           <header>
        <nav>
            <a href="#">Where in the world ?</a>
            <a @click="active = !active, dark = !dark" class="moon">   <i  :class="{'fas fa-moon':dark, 'far fa-moon':active }"></i> Dark Mode</a>
        </nav>
    </header>
       <Input :active="active" :dark="dark"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Input from '../components/Input.vue'

export default {
  name: 'Home',
  components: {
Input
  },
  data() {
    return {
      active:true,
      dark: false,
    }
  }
}
</script>
