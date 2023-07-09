<template>
    <div class="works">
        <div v-for="project in data" :key="project._id" class="project">
            <NuxtLink :to="'project/' + project._id">
                <span class="italic">{{ project.title }}</span>
                {{ project.date }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Array
})
</script>