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
      axios.get(store.apiUrl, {
        params :{
          num : store.numCard,
          offset : store.offsetArray,
          type : store.filterType
        }
      })

      .then(result => {

        store.resultArray = result.data.data

      })
    },
    // getApiFull(){ //Questa la chiamo quando filtro un informazione
    //   axios.get(store.apiUrl , {
    //     params :{
    //       type : store.filterType
    //     }
    //   })
    //   .then(result => {
    //     store.resultArrayAll = result.data.data
    //     console.log('store.resultArrayAll',store.resultArrayAll)
    //   })
    // },
    // printFiltered(){
    //   store.resultArray = [...store.resultArrayAll.splice(store.offsetArray , store.numCard)];
    //   console.log("store.resultArray -->",store.resultArray)
    // }

  },
  mounted(){
    this.getApi()
    // this.getApiFull()
  }
}

</script>

<!------------------>

<template>

<Header />

<SearchSection @changeFilterType="getApi" />

<Main />

<Footer />


</template>

<!------------------>

<style lang="scss">
@import "./scss/main.scss";
@import "bootstrap/scss/bootstrap.scss";
</style>