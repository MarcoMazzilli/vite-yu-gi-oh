<script>
export default {
  name : "Main"
}
</script>

<template>
  <div class="wrapper">
    <div class="container">

      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>

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