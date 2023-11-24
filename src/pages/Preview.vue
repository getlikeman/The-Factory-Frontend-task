<script setup>
import {useRoute} from "vue-router";
import {getPhotoInfoById} from "../components/Unsplash.js";
import {ref} from "vue";

const id=useRoute().params.id
let data=ref()

let isFavorite= localStorage.getItem(id)
let color=ref(isFavorite ? 'background: #FFF200':'background: white')
 getPhotoInfoById(id).then(res=>data.value=res)
function addToFavorite(){
  if (isFavorite===null){
    isFavorite=true
    localStorage.setItem(id, data.value.image)
    color.value='background: #FFF200'
  }else {
    isFavorite=null
    localStorage.removeItem(id)
    color.value='background: white'
  }
}
</script>

<template>
<main >
  <img :src="data.image" class="back-image">
  <div class="preview_menu">
    <div class="avatar">
      <img :src="data.avatar" alt=""  >
      <div>
        <p>{{data.name}}</p>
        <span>@{{data.userName}}</span>
      </div>
    </div>
    <div class="controls">
      <button class="like" :style="color" @click="addToFavorite"><img src="../assets/Like_dark.svg"></button>
      <a :href="data.link" :download="data.link"><button class="download" ><img src="../assets/download.svg"><span>Download</span></button></a>
    </div>
  </div>
  <img :src="data.image" class="preview_image" >
</main>
</template>
<style scoped>
main{
  width: 100dvw;
  margin: auto;
  background: no-repeat center;
  color:white;
}
.preview_menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: 43px auto 46px;
  flex-wrap: nowrap;
}
.avatar{
  display:flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
}
.preview_image{
  margin: auto;
  display: block;
  width: 70%;
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.50);
  border-radius: 8px;
object-fit: cover;


}
.back-image{
  width: 95.7vw;
  height: 90vh;
  position: absolute;
  z-index: -1;
  filter:brightness(30%) grayscale(100%) blur(6px);
  user-select: none;
  transform: scale(1.1);
  top:1px;
}
button{
  width: 50px;
  height: 50px;
  border-radius: 8%;
  padding: 6px;
  cursor: pointer;
}
.avatar>img{
  width: 55px;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #FFF;
  margin-top: 10px;
}
.download{
  border-radius: 8px;
  border: 1px solid #FFF200;
  width: 206px;
  height: 50px;
  background: #FFF200;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  margin-left: 13px;
  font-size: 20px;

}
.download>span{
  color: black;
  margin: 10px;
}
.like{
  width: 50px;
  height: 50px;

  border-radius: 8px;
}
span{
  font-size: 18px;
  color: #F2F2F2;

}
p{
  font-size: 1.25rem;
  color: #F2F2F2;
  margin: 2px;
}
.controls{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.download:hover{
  filter:brightness(80%);
}
.like:hover{
  filter:brightness(80%);
  background:yellow !important ;
}
@media (max-width:650px ) {
  p, span{
    color: black ;
  }
  span{
    color: #BDBDBD;
  }
  .download{
    width: 50px;
  }
  button>span{
    display: none;

  }
  .back-image{
    display: none;
  }
}
</style>
