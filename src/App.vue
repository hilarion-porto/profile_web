<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header></header>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
    <!-- <div class="container">
    <div class="row">
      <div class='split-pane col-xs-12 col-sm-6 uiux-side'>
        <div>
          <div class='text-content'>
            <div class="bold">You want</div>
            <div class='big'>UI/UX?</div>
          </div>
          <button>
            SHOW ME THE DESIGN
          </button>
        </div>
      </div>
      <div class='split-pane-line'>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/74452/bcr-white.png'>
      </div>
      <div class='split-pane col-xs-12 col-sm-6 uiux-side'>
        <div>
          <div class='text-content'>
            <div class="bold">You want</div>
            <div class='big'>UI/UX?</div>
          </div>
          <button>
            SHOW ME THE DESIGN
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <HomeView></HomeView>

  <RouterView />
</template>

<style scoped>
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
    /* width: 100vw;
    height: 100vw; */
    height: 80vw;
  }
  .right{
    background: linear-gradient(rgba(0,0,0,0.85), rgba(164,222,102,0.10)), url(https://images.pexels.com/photos/129830/pexels-photo-129830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size:cover;
    background-position:center;
    flex:1;
    padding:1rem;
    transition: all .2s ease-in-out;
    /* width: 100vw;
    height: 100vw; */
    height: 80vw;
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
</style>