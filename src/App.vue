<script setup>

</script>

<template>
  <nav>
    <div class="nav-nav">
      <router-link to="/" class="nav-link ">Principal</router-link>
      <router-link to="/categories" class="nav-link ">Categorias</router-link>
      <router-link to="/addCategory" class="nav-link ">Crear Categoria</router-link>
      <router-link to="/posts" class="nav-link ">Posts</router-link>
      <router-link to="/addPost" class="nav-link ">Crear Post</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template><!--  -->

<style>
nav {
  display: flex;
  place-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  background-color: #a3a3a3;
}

.nav-nav{
  display: flex;
  gap: 30px;
}

.nav-link{
  text-decoration: none;
  color:#252525;
  transition: .5s;
}

.router-link-active, .router-link-exact-active{
  font-size: 1.1rem;
  border-bottom: 1px solid #252525;
}
</style>
