<template>
  <div class="home">
  <div :class="{active: active, dark: dark}">
           <header>
        <nav>
            <a href="#">Where in the world ?</a>
            <a @click="active = !active, dark = !dark" class="moon">       <svg  :class="{'fas fa-moon':dark, 'far fa-moon':active }" fill="#000" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>  Dark Mode</a>
        </nav>
    </header>
       <Input :active="active"/>
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

