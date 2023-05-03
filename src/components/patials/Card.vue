<script>
export default {
name :  'Card',
props:{
    img : String,
    name: String,
    type : String,
}
}
</script>

<template>

    <div class="mm-card">
        <img :src="img" :alt="name">
        <div class="card-info">
            <div class="name">{{ name }}</div>
            <div class="archetype">{{ type }}</div>
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
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
    transition: .3s;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
    }

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