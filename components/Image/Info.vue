<template>
    <div class="image-info-box">
        <NuxtLink class="image-back" to="/work">&#8592</NuxtLink>
        <div class="image-info-title">
            <div class="image-info-title-container">{{ works.title }}, {{ works.date }}</div>
            <div class="image-info-description">
                {{ works.description }}
            </div>
        </div>
        <div class="image-info-work-title">
            <span class="arrow slidePrev-btn">&#8592</span>
            <div class="image-info-work-title-holder">
                <span class="italic">{{ title }}</span><span class="medium">{{ medium }}</span><span class="size">{{
                    size }}</span>
            </div>
            <span class="arrow slideNext-btn">&#8594</span>
        </div>
    </div>
</template>

<script setup>
const title = useTitle()
const medium = useMedium()
const size = useSize()

const props = defineProps({
    works: Object
})

console.log(props.works)

onBeforeMount(() => {
    title.value = props.works.work[0].title
    medium.value = props.works.work[0].medium
    size.value = props.works.work[0].size
})

onMounted(() => {
    const { $gsap } = useNuxtApp()
    $gsap.from(".image-info-work-title, .image-info-title", {
        opacity: 0,
        filter: "blur(7px)",
        delay: .2,
        duration: .9
    })
})
</script>

<style>
a {
    text-decoration: none;
    color: black;
}

.image-info-box {
    z-index: 500;
}

.arrow {
    cursor: pointer
}

.image-back {
    position: absolute;
    top: 16px;
    left: 16px;
    /* transform: translateX(-50%); */
    background-color: white;
    z-index: 500;
}

.image-info-title {
    cursor: pointer;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 16px;
    left: 50vw;
    transform: translateX(-50%);
    z-index: inherit;
}

.image-info-title:hover .image-info-description {
    height: 100%;
}

.image-info-title-container {
    width: fit-content;
    background-color: white;
    z-index: inherit;
    padding: 0 3px;
}

.image-info-description {
    background-color: white;
    z-index: inherit;
    padding: 0 3px;
    max-width: 60ch;
    overflow: hidden;
    height: 0px;
    /* transition: all .4s ease-in-out; */
    padding: 0 3px;
    margin-top: 8px;
}

.image-info-work-title {
    background-color: white;
    position: absolute;
    bottom: 16px;
    left: 50vw;
    transform: translateX(-50%);
    z-index: inherit;
    padding: 0 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.image-info-work-title-holder {
    padding: 0 10px;
}

.image-info-work-title-holder>* {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>