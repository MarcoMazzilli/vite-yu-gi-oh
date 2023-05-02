<script>
import Card from './patials/Card.vue';
import SearchSection from './patials/SearchSection.vue';
import {store}        from '../data/store'

export default {
  name : "Main",
  components:{
    SearchSection,
    Card,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>

  <SearchSection />

  <div class="main-wrapper">
    <div class="container">

      <div class="card-container">

        <div class="counter-found">
          <p>Found 39 cards</p>
        </div>

        <Card v-for="card in store.resultArray"
        :key="card.id"
        :name="card.name"
        :archetype="card.archetype"
        :img="card.card_images[0].image_url"

        />

      </div>
      

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables.scss" as *;
.main-wrapper{
  background-color: $primary-color;
  min-height: 100vh;

  .container{
    background-color: white;
    padding: 50px;

    .card-container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      min-height: 50px;
     
      .counter-found{
        width: 100%;
        height: 75px;
        background-color: rgb(33, 37, 41);
        display: flex;
        align-items: center;
        padding: 5px;
        margin-bottom: 5px;
        p{
          color: white;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>