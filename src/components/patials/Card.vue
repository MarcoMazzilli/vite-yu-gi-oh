<script>
export default {
name :  'Card',
props:{
    img : String,
    name: String,
    archetype : String,
}
}
</script>

<template>

    <div class="mm-card">
        <img :src="img" :alt="name">
        <div class="card-info">
            <div class="name">{{ name }}</div>
            <div class="archetype">{{ archetype }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables.scss" as *;
.mm-card{
    width: calc(100% / 5 - 20px); //da cambiare
    background-color: $primary-color;
    text-align: center;
    margin-bottom: 20px;

    img{
        width: 100%;
        height: auto;
    }
    .name{
        min-height: 70px;
        padding: 10px;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
    }
    .archetype{
        padding: 10px;
    }
}
</style>