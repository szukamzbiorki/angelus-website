<template>
    <p class="">Error {{ error.statusCode }}</p>
    <p class="">Which means: {{ error.message }}</p>
    <button @click="handleError">Go to home page</button>
</template>
  
<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style>
button {
    font-family: "MaristItalic";
    outline: 0;
}
</style>