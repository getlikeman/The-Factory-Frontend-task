<script setup>
import GalleryContainer from "../components/GalleryContainer.vue";
import {getPhotosByQuery, randomPhoto} from "../components/Unsplash.js";
import {ref} from "vue";
let results = ref(randomPhoto)
let input = ref('')
async function search() {
  results.value = await getPhotosByQuery(input.value)
}

</script>

<template>

  <label for="input" class="search_container"><input type="search" v-model="input" placeholder=" Поиск">
    <button @click="search" id="input"><img src="../assets/Search_dark.svg"></button>
  </label>

  <GalleryContainer :images="results"/>
</template>

<style scoped>
.search_container {
  width: 100dvw;
  height: 268px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background: url('../assets/img.png') no-repeat ;
  background-size: cover;

  margin-bottom: 114px;

}

input {

  width: 100vw;
  max-width: 861px;
  min-width: 120px;
}

button {
  padding: 24px;
  cursor: pointer;
}

input::placeholder {
  font-size: 24px;
}

button, input {
  border: none;
  height: 70px;
  background: white;
  font-size: 24px;
}
</style>
