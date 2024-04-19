<script setup lang="ts">
// import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import Header from '@/components/header/Header.vue';
import AboutMe from '@/components/about/AboutMe.vue';
// import Project from '@/components/project/Project.vue';
import Contact from '@/components/contact/Contact.vue';
import router from '@/router';
// import { defineComponent } from 'vue/dist/vue.js';

// export default defineComponent({
//   components: {
//     Header,
//     AboutMe,
//     Project,
//     Contact,
//   },
// });
  const navigateToAboutPage = () => {
    router.push({path: '/about'})
  }

  // reactive state
  const count = ref(0)

  // functions that mutate state and trigger updates
  function increment() {
    count.value++
  }

  // lifecycle hooks
  onMounted(() => {
    // console.log(`The initial count is ${count.value}.`)
  })
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
        <div class="container-button-left">
            <a class="btn btn-border-4" @click="navigateToAboutPage">About Me</a>
        </div>
      </div>
      <div class="right">
        <div class="container-button-right">
          <a class="btn btn-border-5" href="">Projects</a>
        </div>
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
    box-shadow: inset 0 0 0 2000px rgba(29, 57, 244, 0.3);
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
  .left {
    background-color: rgb(255, 255, 255);
    color: white;
    height: 100vh;
    box-shadow: inset 0 0 0 2000px rgba(29, 57, 244, 0.3);
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
  .container-button-left {
    position: flex;
    /* left: 50%; */
    top: 50%;
    bottom: 50%;
    margin: 50px auto;
    width: 100%;
    text-align: center;
    font-size: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    /* background: #ffffff; */
}
  .container-button-right {
    /* margin: auto auto auto auto; */
    /* display: block; */
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    /* background: #ffffff; */
}

  .btn {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 12px 27px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #999999;
    background: #ffffff;
    border: 3px solid #999999;
    cursor: pointer;
    transition: ease-out 0.5s;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
  }

  .btn.btn-border-4::after,
  .btn.btn-border-4::before {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      transition: .5s;
  }

  .btn.btn-border-4::after {
      top: -9px;
      left: -9px;
      border-top: 3px solid transparent;
      border-left: 3px solid transparent;
  }

  .btn.btn-border-4::before {
      bottom: -9px;
      right: -9px;
      border-bottom: 3px solid transparent;
      border-right: 3px solid transparent;
  }

  .btn.btn-border-4:hover {
      color: #222222;
  }

  .btn.btn-border-4:hover::after,
  .btn.btn-border-4:hover::before {
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      border-color: #1441e0;
  }


  .btn.btn-border-5::after,
  .btn.btn-border-5::before {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      transition: .5s;
  }

  .btn.btn-border-5::after {
      top: -9px;
      left: -9px;
      border-top: 3px solid transparent;
      border-left: 3px solid transparent;
  }

  .btn.btn-border-5::before {
      bottom: -9px;
      right: -9px;
      border-bottom: 3px solid transparent;
      border-right: 3px solid transparent;
  }

  .btn.btn-border-5:hover {
      color: #222222;
  }

  .btn.btn-border-5:hover::after,
  .btn.btn-border-5:hover::before {
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      border-color: #0cfd9d;
  }
</style>
