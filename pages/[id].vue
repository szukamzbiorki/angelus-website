<template>
    <div class="singlework">
        <ImageCarousel :works="works" :pending="pending"></ImageCarousel>
        <ImageInfo :works="works"></ImageInfo>
    </div>
</template>

<style scoped>
body {
    overflow: hidden;
}

.wrapper {
    overflow: hidden;
}
</style>

<style>
body {
    overflow: hidden;
}

.singlework {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    max-width: 100vw;
    max-height: calc(100vh-16px);
    /* max-height: calc(100dvh-16px); */
    overflow: hidden;
    box-sizing: border-box;
}

@media screen and (max-width: 820px) {
    .singlework {
        max-height: -webkit-fill-available;
    }
}
</style>

<script setup>
const route = useRoute()
const query = groq`*[_type == "project" && link == $id]{title, link, date, description, work[]{medium, title, size, asset->{url},asset{_ref}}}[0]`

const sanity = useSanity()

const { data: works, pending, error } = await useAsyncData('articles', () => sanity.fetch(query, { id: route.params.id }))

console.log(works.value == null)

if (works.value == null) {
    throw createError({ statusCode: 404, statusMessage: 'You are looking for a project that is not existing in the system' })
}

definePageMeta({
    layout: "work"
});
</script>

<style></style>

