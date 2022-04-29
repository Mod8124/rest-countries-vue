<template>
 <div :class="{active: active, dark: dark}">
           <header>
        <nav>
            <a href="">Where in the world ?</a>
            <a @click="active = !active, dark = !dark" class="moon">   <i  :class="{'fas fa-moon':dark, 'far fa-moon':active }"></i> Dark Mode</a>
        </nav>
    </header>
    
  <div class="back">
        <router-link to="/">
        <button> <img :src="active ? '/back.svg' : '/back_active.svg'" alt="">Back</button>
    </router-link> 
  </div>
  
    <div class="show" v-for="country in country" :key="country">
        <div class="imgshow">
            <img :src="country.flags.png" :alt="country.name.common">
        </div>

        <div class="infoshow">
          <div id="infoshow">
              <h3>{{country.name.common}}</h3>
              <div class="infote">
                 <div>
                    <p><strong>Native name:</strong> <span v-for="native in country.name.nativeName" :key="native"> {{native.official[0]}}</span></p>
                  <p><strong>Population:</strong> {{country.population}}</p>
                  <p><strong>Region</strong> {{country.region}}</p>
                  <p><strong>Sub Region:</strong> {{country.subregion}}</p>
                  <p><strong>Capital:</strong> {{country.capital[0]}}</p>
                 </div>
              <div>
                    <p class="top"><strong>Top level domain</strong> {{country.tld[0]}}</p>
                  <p><strong>Currencies:</strong> <span v-for="curren in country.currencies" :key="curren"> {{curren.name}}</span> </p>
                  <p><strong>Languages</strong> <span v-for="lang in country.languages" :key="lang"> {{lang }}  </span> </p>
              </div>
              </div>
          </div>
        <div class="border">
          <div class="borderTitle"><p><strong>Border Countries:</strong></p></div>
            <div class="borderCountry">
        <div  v-for="border in country.borders" :key="border" class="borderButton">    <button>{{border}}</button> </div>
          </div>
        </div>
        </div>
    </div>

  </div>
</template>

<script>
import get from '../composables/getCountry'

export default {
    props:['id'],
    setup(props) {

        const {country, error , load} = get(props.id);

        load()


        return {country, error, load}



    },
      data() {
    return {
      active:true,
      dark: false,
    }
  }
}
</script>

<style>


</style>