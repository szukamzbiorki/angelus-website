<template>
    <div class="works">
        <div v-for="project in data" :key="project.id" class="project">
            <NuxtLink :to="project.link">
                <span class="italic">{{ project.title }},</span>
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

<style>
.project {
    margin-bottom: .2em;
}
</style>