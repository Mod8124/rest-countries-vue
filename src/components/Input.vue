<template>
  <main>
          <div class="search">
          <div class="searchIcon">
             <svg fill="none" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="7.5"/><line x1="21" x2="15.8" y1="21" y2="15.8"/></svg>
                <input type="text"  v-model="search" placeholder="Search for a country">
          </div>
    </div>

    <div class="region">
          <select v-model="region" @click="click">
              <option value="null" disabled selected hidden>Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas" >America</option>
                <option value="Asia">Asia </option>
                <option value="Europe" >Europa</option>
                <option value="Oceania">Oceania</option>
          </select>
        <div class="all" v-if="!show">
                  <button @click="show = true">All Countries</button>
        </div>
    </div>

    <div class="countries">
        <div v-if="countries.length" class="gridCountry ">
                <Countries :countries="matching" v-if="show" :active="active" :dark="dark"/>
                <Countries :countries="continent" v-else/>         
        </div>
        <div v-else class="loading">
              <p>Loading...</p>
        </div>
        <div class="err" v-if="error">
              {{error}}
        </div>
    </div>
  </main>
</template>

<script>
import { ref, computed } from '@vue/reactivity'
import Countries from './Countries.vue'
import get from '../composables/getCountries'

export default {
    props:['active', 'dark'],
      components:{Countries},
     setup() {
        const region = ref(null);

        const search = ref('');

       const show = ref(true)

        const {countries, error, load} = get();

        
     const matching = computed(()=> {
       return countries.value.filter((x)=> {
     return    x.name.common.match(search.value)
       })

     });

        const click = () => {
             show.value = false
       }

     const continent = computed(()=> countries.value.filter((x)=> x.region == region.value &&  x.name.common.match(search.value)))

        load();
        
      

      return {region, countries, error, search, matching, continent, show, click}
     } ,

}
</script>