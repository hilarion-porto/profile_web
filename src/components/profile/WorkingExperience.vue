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
          term: "Dec 2021 - Present",
          startDate: "2021-12-01T00:00:00.000Z",
          endDate: "-",
        },
        {
          position: "Senior Mobile Developer",
          company: "PT Decathlon Indonesia",
          term: "Nov 2020 - Aug 2021",
          startDate: "2020-11-01T00:00:00.000Z",
          endDate: "2021-08-01T00:00:00.000Z",
        },
        {
          position: "Fullstack Developer",
          company: "PT Crowde Membangun Bangsa",
          term: "March 2020 - Oct 2020",
          startDate: "2020-03-01T00:00:00.000Z",
          endDate: "2020-10-01T00:00:00.000Z",
        },
        {
          position: "Mobile Developer",
          company: "PT Fore Coffee Indonesia",
          term: "Sept 2019 - Feb 2020",
          startDate: "2019-09-01T00:00:00.000Z",
          endDate: "2020-02-01T00:00:00.000Z",
        },
        {
          position: "Backend Developer",
          company: "PT Halo Komunikasi Sejahtera",
          term: "March - Aug 2019",
          startDate: "2019-03-01T00:00:00.000Z",
          endDate: "2019-08-01T00:00:00.000Z",
        },
      ]
    }
  },
  methods: {
    calculateDate(startDate, endDate) {
      let begin = new Date(startDate);
      let end = endDate !== "-" ? new Date(endDate) : new Date() 
      let startMonth = begin.getMonth()
      let startYear = begin.getFullYear()
      let endMonth = end.getMonth()
      let endYear = end.getFullYear()
      let gapMonth = endMonth - startMonth
      let gapYear = endYear - startYear;
      let sameYear = endYear === startYear

      if (sameYear) {
        gapYear = 0
        gapMonth = gapMonth + 1
      } else {
        if (endMonth < startMonth) {
          if (sameYear) {
            gapYear = 0
            gapMonth = endMonth + (12 - startMonth) + 1
          } else {
            gapYear = gapYear - 1
            gapMonth = (12 - startMonth) + endMonth + 1
          }
        }
      }
      let resutl = {
        gapMonth: gapMonth,
        gapYear: gapYear
      }
      return resutl;
    },
    calculateMonth() {

    }
  },
  created() {
    // this.calculateDate("2014-12-21T00:00:00.000Z", "-")
    console.log(this.a) // => 2
  }
}
</script>


<template>
  <div>
    <div class="mb-8">
      <a class="pl-2 ml-2 mt-2 text-stone-700 text-2xl">Working Experience</a>
    </div>
    <div class="" v-for="(experience, index) in experiences" key="index">
      <div :class="['grid grid-cols-2 grid-flow-col gap-20 ml-8 mt-4 pl-'+index]+' border-stone-500 border-b-2'">
        <div class="grid grid-row-3 grid-flow-row mb-2">
          <a class="text-stone-700 text-lg">{{ experience.position }}</a>
          <a class="text-stone-700 text-base">{{ experience.company }}</a>
          <a class="text-stone-700 text-sm">{{ experience.term }}</a>
        </div>
        <div class="ml-14 border-solid border-2 rounded-md border-stone-500 mb-6">
          <p class="text-stone-700 text-sm flex items-center justify-center h-24">
            <a>{{ calculateDate(experience.startDate, experience.endDate).gapYear }} {{ calculateDate(experience.startDate, experience.endDate).gapYear > 1 ? "Years" : "Year" }} </a>
            <a>&nbsp;{{ calculateDate(experience.startDate, experience.endDate).gapMonth }} {{ calculateDate(experience.startDate, experience.endDate).gapMonth > 1 ? "Months" : "Month" }}</a>
          </p>
        </div>
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