<script setup>
import {useRouter} from "vue-router";

let  props=defineProps(['images'])

</script>

<template>
<main>
 <RouterLink v-for="image in props.images" :to='"/preview/"+image.id' ><img crossorigin="anonymous"  :src="image.src" ></RouterLink>
</main>
</template>

<style scoped>
main{
  display:  grid;
  grid-template-columns:  repeat(3 ,1fr);
   width:80vw ;
  gap: 30px;
  margin: auto;
  align-items: center;
}

img{
  max-width: 473px;
  max-height: 440px;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 5%;
  width: 100%;
  height: 100%;
}
@media (max-width: 767px) {

  main{
    grid-template-columns: repeat(2,1fr);
  }
}
@media (max-width: 450px) {
  main{
    grid-template-columns: repeat(1,1fr);
  }
}
</style>
