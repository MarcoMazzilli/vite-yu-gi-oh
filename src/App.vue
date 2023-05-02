<script>
import Header         from './components/Header.vue';
import Main           from './components/Main.vue';
import Footer         from './components/Footer.vue';
import SearchSection  from './components/patials/SearchSection.vue';
import {store}        from './data/store'
import axios          from 'axios';

export default {

  name : "App",

  components:{
    Header,
    Main,
    SearchSection,
    Footer,
  },
  data(){
    return{
      store,
    }
  },
  methods:{

    getApi(){
      axios.get(store.apiUrl +  "?num=25&offset=0")
      .then(result => {
        store.resultArray = result.data.data
        console.log(result.data.data[0].card_images[0].image_url)
        console.log(store.resultArray)
      })
    }

  },
  mounted(){
    this.getApi()
  }
}

</script>

<!------------------>

<template>

<Header />

<Main />

<Footer />


</template>

<!------------------>

<style lang="scss">
@import "./scss/main.scss";
@import "bootstrap/scss/bootstrap.scss";
</style>