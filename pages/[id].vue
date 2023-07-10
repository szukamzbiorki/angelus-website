<template>
    <div class="singlework">
        <ImageCarousel :works="works" :pending="pending"></ImageCarousel>
        <ImageInfo :works="works"></ImageInfo>
    </div>
</template>

<style>
body {
    overflow: hidden;
}

.singlework {
    width: 100vw;
    height: 100dvh;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
}
</style>

<script setup>
const route = useRoute()
const query = groq`*[_type == "project" && link == $id]{title, link, date, description, work[]{medium, title, size, asset->{url},asset{_ref}}}[0]`

const sanity = useSanity()

const { data: works, pending, error } = await useAsyncData('articles', () => sanity.fetch(query, { id: route.params.id }))

console.log(error)

if (!error.value === null) {
    throw createError({ statusCode: 404, statusMessage: 'You are looking for a project that is not existing in the system' })
}

definePageMeta({
    layout: "work"
});
</script>

