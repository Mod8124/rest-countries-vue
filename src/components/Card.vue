<template>
  <div class="card"><!--start card-->
      <div class="imgCard"><img :src="country.flags.png" alt=""></div>
      <div class="bodyCard">
          <h3>{{country.name.common}}</h3>
          <p><strong>Population:</strong> {{country.population}}</p>
          <p><strong>Region:</strong> {{country.region}}</p>
          <p><strong>Capital:</strong> {{country.capital}}</p>
      </div>
  </div><!--card end-->
</template>

<script>
export default {
    props:['country'],
    setup() {


    },
}
</script>

<style>

</style>