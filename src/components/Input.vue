<template>
  <main>
          <div class="search">
          <div class="searchIcon">
                <div id="searchIcon">
                  <input type="text"  v-model="search" placeholder="Search for a country">
                  <img :src="active ? '/search.svg':'/search_active.svg'" alt="search icon">
                </div>
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
                <Countries :countries="matching" v-if="show"/>
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
             const regex = new RegExp(search.value, 'gi')
     return    x.name.common.match(regex)
       })

     });

        const click = () => {
             show.value = false
       }

     const continent = computed(()=> countries.value.filter((x)=> {
         const regex = new RegExp(search.value, 'gi')
      return x.region == region.value &&  x.name.common.match(regex)
     }))

        load();
        

      return {region, countries, error, search, matching, continent, show, click}
     } ,

}
</script>