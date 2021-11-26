import {ref} from 'vue'

const get = (id)=> {
  const country = ref([]);

  const error = ref(null);

  const load = async () => {
      try {
          let data = await fetch('https://restcountries.com/v3.1/name/'+ id);
          if(!data.ok) {
              throw Error('Fail, please reload the page ')
          }
          country.value = await data.json();
      }
      catch (err) {
          error.value = err.message;
          console.log(err.message)
      }
  }

  return {load, error, country}
}

export default get