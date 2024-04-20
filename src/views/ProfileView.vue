<!-- <script setup lang="ts">
  import router from '@/router';
  
  // const scrollToElement = () => {
  //   const el = this.$refs.scrollToMe;

  //   if (el) {
  //     // Use el.scrollIntoView() to instantly scroll to the element
  //     el.scrollIntoView({behavior: 'smooth'});
  //   }
  // }
  const parallax = document.getElementById("parallax");

// // Parallax Effect for DIV 1
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
//   // DIV 1 background will move slower than other elements on scroll.
// });

  const navigateToAboutPage = () => {
    router.push({path: '/about'})
  }

</script> -->

<script setup lang="js">
  import router from '@/router';
  import HaloJasa from '@/components/about/experience/HaloJasa.vue';
  import SkillChart from '@/components/profile/SkillChart.vue';
  import ProfileDetail from '@/components/profile/ProfileDetail.vue';
  import WorkingExperience from '@/components/profile/WorkingExperience.vue'

  const navigateToAboutPage = () => {
    router.push({path: '/about'})
  }

  window.smoothScroll = function(target) {
    var scrollContainer = target;
    //find scroll container
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    if (scrollContainer.scrollTop === scrollContainer.scrollTop) {
      scrollContainer.scrollTop = scrollContainer.scrollTop
    } else {
      scrollContainer.scrollTop = 1
    }

    var targetY = 0;
    //find the top of target relatively to the container
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
        // console.log("targetY: ", targetY);
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 1);
    }

    // console.log("scrollContainer: ", scrollContainer);
    // console.log("scrollContainer.scrollTop: ", scrollContainer.scrollTop);
    // console.log("targetY: ", targetY);
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }

  function scrollTo(id) {
    document.querySelector(`#${id}`).scrollIntoView();
  }
  
  const scrollToSec1 = () => {
    smoothScroll();
  }

  const scrollToSec2 = () => {
    router.push({path: '/about'})
  }

  const navigateToHomePage = () => {
    router.push({ path: '/' })
  }
</script>

<!-- <script setup lang="ts">
import ExperienceView from './ExperienceView.vue';

function openBar() {
  var x = document.getElementById("navbar");
  console.log("x: ", x);
  
  // if (x!.className === "topnav") {
  //   x!.className += " responsive";
  // } else {
  //   x!.className = "topnav";
  // }
}
function openMenu(params: String) {
  document.querySelector('.first-button')!.addEventListener('click', function () {

  document.querySelector('.animated-icon1')!.classList.toggle('open');
  });
  document.querySelector('.second-button')!.addEventListener('click', function () {

  document.querySelector('.animated-icon2')!.classList.toggle('open');
  });
  document.querySelector('.third-button')!.addEventListener('click', function () {

  document.querySelector('.animated-icon3')!.classList.toggle('open');
  });
}
</script> -->

<template>
  <div>
    <!-- kindly include relevent tags before */ -->

    <header>
      <!-- <nav class="navbar navbar-expand-lg fixed-top navbarScroll navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Dhruv.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" @click="openBar()"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#press">Press</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#shop">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
              </ul>   
            </div>
          </div>
        </nav> -->
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="">
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <!-- <li><a id="cursor-item" onclick="smoothScroll(document.getElementById('parallax-item1'))">Projects</a></li> -->
            <li><a id="cursor-item" onclick="smoothScroll(document.getElementById('parallax-item1'))">About</a></li>
            <li><a id="cursor-item" onclick="smoothScroll(document.getElementById('parallax-item2'))">Stacks</a></li>
            <li><a id="cursor-item" onclick="smoothScroll(document.getElementById('parallax-item3'))">
                Working Experience</a></li>
            <!-- <li><a id="cursor-item" onclick="smoothScroll(document.getElementById('parallax-item4'))">Social Media</a></li> -->
            <!-- <li><a href="#">Menu</a></li> -->
            <!-- <li><a href="#">Testimonial</a></li> -->
            <!-- <li><a href="#">Contact</a></li> -->
          </ul>
          <h1 id="cursor-item" class="logo" @click="navigateToHomePage">
            Hilarion
          </h1>
        </div>
      </nav>
    </header>

    <section>
      <div id="parallax-item1" class="parallax-item1">
        <div class="mt-20">
          <ProfileDetail />
        </div>
      </div>
      <div id="parallax-item2" class="parallax-item2">
        <div class="mt-20 mb-10">
          <SkillChart />
        </div>
      </div>
      <div id="parallax-item3" class="parallax-item3">
        <div class="mt-20 mb-10">
          <WorkingExperience/>
          <!-- <h2>Div 3</h2> -->
        </div>
      </div>
      <!-- <div id="parallax-item4" class="parallax-item4">
        <h2>Div 4</h2>
      </div> -->
    </section>

    <!-- <section id="portfolio" class="column">
        <p class="round2 col">Rounder border</p>
        <br>
        <p class="round2 col">Rounder border</p>
      </section>
      <section id="press">
        <h2>Stacks</h2>

      </section>
      <section id="shop">
        <h2>Experience</h2>

      </section>
      <section id="about">
        <h2>About</h2>
      </section> -->
  </div>
</template>

<!-- navbar -->
<style scoped>*,
  *::after,
  *::before{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  .html{
      font-size: 62.5%;
  }

  .navbar input[type="checkbox"],
  .navbar .hamburger-lines{
      display: none;
  }

  .container{
      max-width: 1200px;
      width: 90%;
      margin: auto;
  }

  .navbar{
      box-shadow: 0px 5px 10px 0px #aaa;
      position: fixed;
      width: 100%;
      background: #fff;
      color: #000;
      opacity: 0.85;
      z-index: 100;
  }

  .navbar-container{
      display: flex;
      justify-content: space-between;
      height: 64px;
      align-items: center;
  }

  .menu-items{
      order: 2;
      display: flex;
  }
  .logo{
      order: 1;
      font-size: 2.3rem;
  }

  .menu-items li{
      list-style: none;
      margin-left: 1.5rem;
      font-size: 1.3rem;
  }

  .navbar a{
      color: #444;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease-in-out;
  }

  .navbar a:hover{
      color: #117964;
  }

  @media (max-width: 768px){
      .navbar{
          opacity: 0.95;
      }

      .navbar-container input[type="checkbox"],
      .navbar-container .hamburger-lines{
          display: block;
      }

      .navbar-container{
          display: block;
          position: relative;
          height: 64px;
      }

      .navbar-container input[type="checkbox"]{
          position: absolute;
          display: block;
          height: 32px;
          width: 30px;
          top: 20px;
          left: 20px;
          z-index: 5;
          opacity: 0;
          cursor: pointer;
      }

      .navbar-container .hamburger-lines{
          display: block;
          height: 28px;
          width: 35px;
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }

      .navbar-container .hamburger-lines .line{
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: #333;
      }
      
      .navbar-container .hamburger-lines .line1{
          transform-origin: 0% 0%;
          transition: transform 0.3s ease-in-out;
      }

      .navbar-container .hamburger-lines .line2{
          transition: transform 0.2s ease-in-out;
      }

      .navbar-container .hamburger-lines .line3{
          transform-origin: 0% 100%;
          transition: transform 0.3s ease-in-out;
      }

      .navbar .menu-items{
          padding-top: 100px;
          background: #fff;
          height: 100vh;
          max-width: 300px;
          transform: translate(-150%);
          display: flex;
          flex-direction: column;
          margin-left: -40px;
          padding-left: 40px;
          transition: transform 0.5s ease-in-out;
          box-shadow:  5px 0px 10px 0px #aaa;
          overflow: scroll;
      }

      .navbar .menu-items li{
          margin-bottom: 1.8rem;
          font-size: 1.1rem;
          font-weight: 500;
      }

      .logo{
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 2.5rem;
      }

      .navbar-container input[type="checkbox"]:checked ~ .menu-items{
          transform: translateX(0);
      }

      .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
          transform: rotate(45deg);
      }

      .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
          transform: scaleY(0);
      }

      .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
          transform: rotate(-45deg);
      }

  }

  @media (max-width: 500px){
      .navbar-container input[type="checkbox"]:checked ~ .logo{
          display: none;
      }
  }
</style>

<!-- body -->
<style scoped>
  #cursor-item {
    cursor: pointer; 
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  .parallax-item1 {
    padding: 0px 0px 0px 20px;
    display: flex;
    color: aliceblue;
    /* align-items: center; */
    /* justify-content: center; */
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 100vh;
    /* background: url("https://images.unsplash.com/photo-1663305411753-4c305e177ff3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM5NDA4ODE&ixlib=rb-1.2.1&q=80"); */
    background-size: cover;
    background: #fafafa;
  }
  .parallax-item2 {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 100vh;
    background: #fdd835;
  }
  .parallax-item3 {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 100vh;
   /* background: url("https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM5Mzk5ODc&ixlib=rb-1.2.1&q=80"); */
    background: #1ab348;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax Effect for DIV 3 */
    min-height: 600px;
  }

  .parallax-item4 {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 100vh;
    background: #1565c0;
  }

  /* .parallax-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 100vh;
  } */

  .parallax-item h2 {
    font-size: 3rem;
    text-transform: uppercase;
    background-color: whitesmoke;
    padding: 1rem;
    border-radius: 1rem;
  }

  /* .parallax-item:first-child {
    background: url("https://images.unsplash.com/photo-1663305411753-4c305e177ff3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM5NDA4ODE&ixlib=rb-1.2.1&q=80");
    background-size: cover;
  }

  .parallax-item:nth-child(2) {
    background: #fdd835;
  }

  .parallax-item:nth-child(3) {
    background: url("https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM5Mzk5ODc&ixlib=rb-1.2.1&q=80");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 600px;
  }

  .parallax-item:nth-child(4) {
    background: #1565c0;
  } */

  @media screen and (max-width: 768px) {
    .parallax-item h2 {
      font-size: 1.5rem;
    }
  }
</style>