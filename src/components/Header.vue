<script>
export default {
  name : "Header"
}
</script>

<template>
  <header>

    <img src="/public/logo.bmp" alt="">
    <h1>Yu-gi-oh Api</h1>

  </header>
</template>

<style lang="scss">
@use '../scss/partials/variables.scss' as *;

header{
  height: 100px;
  display: flex;
  align-items: center;
  img{
    height: 30%;
    margin: 0 20px;
  }
}

</style>