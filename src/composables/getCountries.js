import {ref} from 'vue'

const get = ()=> {
  const countries = ref([]);

  const error = ref(null);

  const load = async () => {
      try {
          let data = await fetch('https://restcountries.com/v3.1/all');
          if(!data.ok) {
              throw Error('Fail, please reload the page ')
          }
          countries.value = await data.json();
      }
      catch (err) {
          error.value = err.message;
          console.log(err.message)
      }
  }

  return {load, error, countries}
}

export default get