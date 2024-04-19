<script lang="js">
import { ref, onMounted } from 'vue';
export default {
    data() {
        return {
            skillStacks : [
                {  
                    id: 1,
                    name: "Frontend",
                    skills: [
                        "Vuejs",
                        "Nuxtjs",
                        "Reactjs",
                        "Nextjs",
                        "Tailwind",
                        "Mobx",
                        "Redux",
                        "Laravel"
                    ]
                },
                {
                    id: 2,
                    name: "Backend",
                    skills: [
                        "Nodejs",
                        "Expressjs",
                        "Go",
                        "PHP",
                    ]
                },
                {
                    id: 3,
                    name: "Mobile Dev",
                    skills: [
                        "Flutter",
                        "React Native",
                    ]
                },
                {
                    id: 4,
                    name: "Database",
                    skills: [
                        "PostgreSQL",
                        "MySQL",
                        "MongoDB",
                        "Mongoose",
                        "Redis",
                        "RabbitMQ",
                        "Kafka",
                        "firebase"
                    ]
                },
                {
                    id: 5,
                    name: "Cloud",
                    skills: [
                        "AWS",
                        "GCP",
                    ]
                },
            ]
        }
    },
}
</script>


<template>
    <div>
        <div>
            <a class="ml-2 mt-2 mb-2 text-stone-700 text-2xl">Skills</a>
        </div>
        <div class="grid grid-col-5 grid-flow-col gap-4">
            <div v-for="(item, index) in skillStacks" :key="item.id">
                <div class="slick-card">
                    <div class="slick-title">
                        <h2>{{ item.name }}</h2>
                    </div>
                    <div class="slick-content" v-for="(skill, i) in item.skills" :key="i">
                        <div class="slick-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                            </svg>
                            <a></a>
                            <p>&nbsp;{{ skill }}</p>
                        </div>
                    </div>
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