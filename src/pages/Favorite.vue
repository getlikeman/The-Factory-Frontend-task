<script setup>

import GalleryContainer from "../components/GalleryContainer.vue";
let favorites = Object.keys(localStorage).map(key=>{return {id:key,src:localStorage.getItem(key)} });

</script>

<template>
  <p>Избранное</p>
  <GalleryContainer :images="favorites"/>
</template>

<style scoped>
  p{
    margin-top: 94px  ;
    text-align: center;
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
</style>
