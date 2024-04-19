<script lang="js">
import { ref, onMounted } from 'vue';
export default {
  name: 'WorkingExperience',
  data() {
    return {
      experiences: [
        {
          position: "Technical Head",
          company: "PT Pintar Cari Usaha",
          term: "Dec 2021 - Present"
        },
        {
          position: "Senior Mobile Developer",
          company: "PT Decathlon Indonesia",
          term: "Nov 2020 - Aug 2021"
        },
        {
          position: "Fullstack Developer",
          company: "PT Crowde Membangun Bangsa",
          term: "March 2020 - Oct 2020"
        },
        {
          position: "Mobile Developer",
          company: "PT Fore Coffee Indonesia",
          term: "Sept 2019 - Feb 2020"
        },
        {
          position: "Backend Developer",
          company: "PT Halo Komunikasi Sejahtera",
          term: "March - Aug 2019"
        },
      ]
    }
  },
  methods: {
    plus() {
      this.a++
    }
  },
  created() {
    this.plus()
    console.log(this.a) // => 2
  }
}
</script>


<template>
  <div>
    <div class="mb-4">
      <a class="pl-2 ml-2 mt-2 text-stone-700 text-2xl">Working Experience</a>
    </div>
    <div class="" v-for="(experience, index) in experiences" key="index">
      <div class="grid grid-rows-3 grid-flow-col gap-0 pl-4 mt-4">
        <a class="text-gray-700 text-lg">{{ experience.position }}</a>
        <a class="text-gray-700 text-base">{{ experience.company }}</a>
        <a class="text-gray-700 text-sm">{{ experience.term }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  body {
    /*Body is a stand in for whatever container these would go inside*/
    background-color: lightblue;
    display: flex;
  }

  .slick-card {
    background-color: white;
    margin: 8px;
    color: black;
    font-family: monospace;
    overflow: hidden;
    border: solid 2px slategray;
    border-radius: 12px;
    min-width: 200px;
    max-width: 100%;
  }

  .slick-horizon {
    display: flex;
  }

  .slick-title {
    background-color: lightgray;
    padding-top: 3px;
    padding-left: 6px;
  }

  .slick-title h2 {
    margin-top: 2px;
  }

  .slick-item {
    display: flex;
    align-items: center;
    margin: 6px;
    border-radius: 6px;
    background-color: #EFEFEF;
    padding-left: 20px;
    max-width: 100%;
  }

  .slick-item img {
    max-height: 25px;
    max-width: 25px;
    margin-right: 10px;
  }
</style>