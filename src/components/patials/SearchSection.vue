<script>
import { store } from "../../data/store";
import dbType from "../../data/dbType"

export default {
  name : "SearchSection",
  data(){
    return{
      store,
      dbType,
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="container">

      <select v-model="store.filterType" class="form-select" aria-label="Default select example">
        <option value=" " selected>All the cards</option>
        <option 
        
        v-for="(type,id) in dbType" 
        :key="id"
        :value="type">{{ type }}
      </option>
    </select>

    <div 
    class="btn btn-primary mx-3"
    @click="$emit('changeFilterType')">Search</div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables.scss" as *;
.wrapper{
  background-color: $primary-color;
  .container{
    height: 75px;
    display: flex;
    align-items: center;

    select{
      width: 20%;
    }
  }
}
</style>