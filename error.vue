<template>
    <p class="">{{ error.statusCode }}</p>
    <p class="">{{ error.message }}</p>
    <button @click="handleError">Go to home page</button>
</template>
  
<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>