<template>
    <div class="singlework">
        <ImageCarousel :images="data[0].work"></ImageCarousel>
        <ImageInfo :info="data[0]"></ImageInfo>
    </div>
</template>

<style>
.singlework {
    width: 100vw;
    height: 100dvh;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
}
</style>

<script setup>
const route = useRoute()
console.log(route.params.id)
const query = groq`*[_type == "project" && _id == $id]{title, date, description, work[]{medium, title, size, asset->{url},asset{_ref}}}`
const { data } = useSanityQuery(query, { id: route.params.id })

definePageMeta({
    layout: "work"
});
</script>

