<template>
  <div class="country" v-for="country in countries" :key="country">
       <router-link :to="{name:'Country', params:{id:country.name.common}}">
         <Card :country="country"/>
       </router-link> 
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    props:['countries']
}
</script>

<style>
.country a {
    text-decoration: none;
}

</style>