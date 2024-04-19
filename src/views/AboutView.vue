<script setup lang="ts">
  import { ref, onMounted } from 'vue'
import router from '@/router';
  // export default {
  //   name: 'about',
  //   components: {
  //     // HomeComponent
  //   },
  //   // onMounted(() => {
  //   //   console.log(`The initial count is ${count.value}.`)
  //   // })
  // }

  const navigateToHomePage = () => {
    router.push({path: '/'})
  }
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at temporibus mollitia blanditiis nemo explicabo, veritatis aperiam, quaerat fuga provident id nobis dolor quos inventore fugit atque illum? Illum, quas.</p>
  </div>

  <div class="right">
    <div class="container-button-right">
      <a class="btn btn-border-5" @click="navigateToHomePage">Back</a>
    </div>
  </div>
</template>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  .left,
  .right {	
    width: 100%;	
    height: 100%;
  }
  .right {
    height: 100vh;
    color: white;
    /* background-color: black; */
    position: sticky;
    top: 0;
    transition: all .5s ease-in;
    /* background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)); */
    background-size: 100% 100%;
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
