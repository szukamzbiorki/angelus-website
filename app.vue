<template>
  <NuxtLayout>
    <NuxtPage>

    </NuxtPage>
  </NuxtLayout>
</template>

<script setup>
const { $gsap } = useNuxtApp()
</script>


<style>
.work-enter-active,
.work-leave-active {
  transition: all .4s;
}

.work-enter-from,
.work-leave-to {
  transform: translateY(100%);
}
</style>
