<script>
import Header         from './components/Header.vue';
import Main           from './components/Main.vue';
import Footer         from './components/Footer.vue';
import SearchSection  from './components/patials/SearchSection.vue';

export default {

  name : "App",

  components:{
    Header,
    Main,
    SearchSection,
    Footer,
  }
}

</script>

<!------------------>

<template>

<Header />

<Main />


</template>

<!------------------>

<style lang="scss">
@import "./scss/main.scss";
@import "bootstrap/scss/bootstrap.scss";
</style>