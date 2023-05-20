<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const clickHandler = () => {
  router.push("/");
};
</script>

<template>
  <div>
    <h1>404 Not Found BRO! 😢</h1>
    <button @click="clickHandler">Return Home Page</button>
  </div>
</template>

<style scoped>
div {
    width: 570px;
    height: 250px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    background-color: red;
    border-radius: 15px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

h1{
    color:white
}

button{
    width: 200px;
    height: 50px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);

    animation: blinker 1.5s linear infinite;
    font-size: 20px;
    border: none;
    cursor: pointer;
}


@keyframes blinker {
  50% {
    opacity: 0;
  }
}


</style>
