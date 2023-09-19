<script setup lang="ts">
// import { defineComponent } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import Header from '@/components/header/Header.vue';
import AboutMe from '@/components/about/AboutMe.vue';
// import Project from '@/components/project/Project.vue';
import Contact from '@/components/contact/Contact.vue';
// import { defineComponent } from 'vue/dist/vue.js';

// export default defineComponent({
//   components: {
//     Header,
//     AboutMe,
//     Project,
//     Contact,
//   },
// });
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <about /> -->
    <!-- <AboutMe />
    <Project />
    <Contact /> -->
  </main>
   <div class="wrapper">
    <div class="left">
      <img class="self-image" src="/src/assets/image/self-pict.jpeg" alt="Avatar">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at temporibus mollitia blanditiis nemo explicabo, veritatis aperiam, quaerat fuga provident id nobis dolor quos inventore fugit atque illum? Illum, quas.</p>
    </div>
    <div class="right">
      <!-- <p>this is the right pane</p> -->
      </div>
    </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0 10px;
  }
  .wrapper {
    display:flex;
  }
  .self-image{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 80%;
    /* max-width: 200px; */
    height: 250px;
    padding: 20px 0px 0px 0px ;
  }
  .left,
  .right {	
    width: 50%;	
    height: 100%;
  }
  .right {
    height: 100vh;
    color: white;
    background-color: black;
    position: sticky;
    top: 0;
    transition: all .5s ease-in;
    background-image: url('/src/assets/image/code-screen4.jpeg');
    /* background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)); */
    box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.3);
    background-size: 100% 100%;
  }
</style>

<!-- <style scoped>
.container-info {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 490px;
  background-color: red; }
  @media (min-width: 768px) {
    .container-info {
      float: left;
      /*position: fixed;*/
      left: 0;
      top: 0;
      height: 100%;
      width: 50%; } }



.container-main {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 490px;
  background-color: grey; }
  @media (min-width: 768px) {
    .container-main {
      float: right;
      /*position: fixed;*/
      right: 0;
      top: 0;
      height: 100%;
      width: 50%; } }
</style> -->

<!-- <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Kodchasan');

  html, body, section{
    height: 100%;
    width: 100%;
  }
  body{
    color:#fff;
    text-align:center;
    width: 100%;
    height: 100%;
  }
  .container{
    display:flex;
    margin: 0;
    padding: 0;
  }
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  .left{
    background: linear-gradient(rgba(0,0,0,0.85), rgba(255,255,255,0.10)), url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size:cover;
    background-position:center;
    flex:1;
    padding:1rem;
    transition: all .2s ease-in-out;
    height: 100vw;
  }
  .right{
    background: linear-gradient(rgba(0,0,0,0.85), rgba(164,222,102,0.10)), url(https://images.pexels.com/photos/129830/pexels-photo-129830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size:cover;
    background-position:center;
    flex:1;
    padding:1rem;
    transition: all .2s ease-in-out;
    height: 100vw;
  }
  .left:hover, .right:hover{
    transform: scale(0.95);
  }

  .left h1{
    font-family: 'Kodchasan', sans-serif;
    font-size:4em;
  }
  .right h1{
    font-family: 'Kodchasan', sans-serif;
    font-size:4em;
  }
  .button{
    border-radius:30px;
    color:#fff;
    text-decoration:none;
    background-color:#fcad26;
    padding:15px 25px;
    margin:0 2%;
    text-align:center;
    font-weight:bold;
    display:inline-block;
    font-size:1.5em;
    cursor:pointer;
    transition:all 0.3s;
    width: 150px;
    
  }
  .button:hover{
    background: #fcc567;
    color:#fff;
  }
</style> -->