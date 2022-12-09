<script setup>
import { ref } from 'vue'

const Title = "Institución Universitaria Digital de Antioquia"
</script>

<template>
  <div class="container">
    <h1>{{ Title }}</h1>
    <div class="content">
      <div class="image">
        <img src="https://iudigital.educatic.com.co/appsFiles/archivosminerva/imgCartelera/empresa_1/SliderEducatic120200616115418.jpg" alt="Home Image">
      </div>
      <div class="info">
        <h1 class="title-home"> Cordial Bienvenida</h1>
        <h1 class="title-home"> Administrador de Categorias y de Posts</h1>
        <div class="actions" >
          <router-link to="/categories" >Categorias</router-link>
          <router-link to="/categories" >Posts</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 100%;
  overflow: hidden;
  height: fit-content;
  display: grid;
  place-items: center;
}

.content{
  margin-top: 30px;
  position: relative;
  max-width: 800px;
  height: 450px;
  border-radius: 10px ;
  overflow: hidden;
}
.content .image{
  overflow: hidden;
  position: inherit;
  z-index: -1;
}

.content .info{
  padding: 15px;
  display: flex;
  gap:30px;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
  height: 100%;
  right:0;
  background-color: rgba(255,255,255, 0.5);
  position: absolute;
  top: 0;

}

.title-home{
  font-size: 1.3rem;
  margin: 20px auto;
  font-weight: 300;
}

.title-home:nth-child(1){
  letter-spacing: 2px;
  font-weight: bold;
}
.content .info .actions{
  font-size: 1.2rem;
  display: flex;
  gap: 25px;
}

.content .info .actions a{
  font-size: 1.1rem;
  text-decoration: none;
  color: #FFFFFF;
  letter-spacing: 2px;
  border-bottom: 1px solid #FFF;
}
</style>
