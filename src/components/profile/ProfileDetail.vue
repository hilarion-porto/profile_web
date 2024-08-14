<script lang="js">
import { ref, onMounted } from 'vue';
import StatDiagram from './StatDiagram.vue';
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      options: {
        xaxis: {
          categories: ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Cloud', 'Documentation'],
          labels: {
            show: true,
            style: {
              // colors: ["#a8a8a8"],
              fontSize: "12px",
              fontFamily: 'Arial'
            }
          }
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          background: {
            enabled: true,
            borderRadius: 2,
          }
        },
        series: [
          {
            name: "Radar Series 1",
            data: [70, 90, 90, 90, 65, 60]
          },
          // {
          //   name: "Radar Series 2",
          //   data: [26, 21, 20, 6, 8, 15]
          // }
        ],
      },
      labels: ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Cloud', 'Documentation']
    }
  },
}
</script>


<template>
  <!-- <div class="flex flex-col space-y-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div> -->

  <div class="grid grid-rows-2 grid-flow-col gap-4">
    <div
      class="row-span-3 mt-2 mb-5 pb-3 pl-2 pr-2 border-solid col grid-flow-col border-2 rounded-md border-sky-500 ...">
      <div>
        <img class="self-image mb-4" src="/src/assets/image/self-pict.jpeg" alt="Avatar">
      </div>
      <div class="col-start-1 col-end-3">
        <span class="pl-2 pr-2 grid grid-cols-2">
          <a class="text-gray-700">Name: </a>
          <a class="text-gray-700">Hilarion Lumban Batu</a>
        </span>
      </div>
      <div>
        <span class="pl-2 pr-2 grid grid-cols-2">
          <a class="text-gray-700">Occupation: </a>
          <a class="text-gray-700">Software Engineer</a>
        </span>
      </div>
      <div>
        <span class="pl-2 pr-2 grid grid-cols-2">
          <a class="text-gray-700">Personal Background: </a>
          <a class="text-gray-700">Fullstack Engineer since 2018</a>
        </span>
      </div>
      <div>
        <span class="pl-2 pr-2 grid grid-cols-2">
          <a class="text-gray-700">Languages: </a>
          <a class="text-gray-700">English, Indonesia</a>
        </span>
      </div>
    </div>
    <div class="row-span-3 ">
      <apexchart width="500" type="radar" :options="options" :series="options.series"></apexchart>
    </div>
  </div>
</template>

<style scoped>
    .self-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 80%;
        /* max-width: 200px; */
        height: 250px;
        padding: 20px 0px 0px 0px;
    }
    div {
      color: black;
    }
    .section {
      width: 1000px;
    }
</style>