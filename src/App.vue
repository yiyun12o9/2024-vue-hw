<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>&emsp; -->
        <!-- <RouterLink to="/about">About</RouterLink>&emsp;  -->
        <RouterLink to="/week1">Week1</RouterLink>&emsp;
        <RouterLink to="/week2">week2</RouterLink>&emsp;
        <RouterLink to="/week3">Week3</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>
nav{
  /* background-color: rgb(222, 236, 249); */
  padding:20px 5px;
  margin:0;
  font-size: 20px;
}
nav a{
  text-decoration: none;
  color:rgb(13, 49, 72);
}
nav a:hover{
  color:rgb(49, 134, 195);
}
</style>
