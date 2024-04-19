<script setup lang="js">
// export default {
    
// }
const imgHaloJasa = '/src/assets/icon/halojasa.png';
</script>

<template >
    <div class="experience-container">
        <div class="left-container">
            <div class="logo-halojasa">
                <img  :src=imgHaloJasa>
            </div>
        </div>
        <div class="right-container">
            <span>
                <a class="explanation-experience">
                    As a backend enginer lorem ipsum asjkhfkjashfk ja asjfkas jfkasj fkjasklfj alkjf l ajlks jalks
                </a>
            </span>
        </div>
    </div>
</template>

<style scoped>
    img, .logo-halojasa {
        width: 300px;
        align-items: start;    
        float:left;
        /* margin: 0 15px 0 0; */
    }
    .experience-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
        /* background-color: #2196F3; */
        padding: 10px;
    }
    .experience-container, div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
    .left-container  {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .explanation-experience {
        /* align-items: end; */
        /* justify-content: right; */
        text-align: right;
    }

</style>