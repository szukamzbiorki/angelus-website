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
                <span class="italic">{{ title }}<span v-if="year" class="year">{{ year }}</span></span><span
                    class="medium">{{ medium
                    }}</span><span class="size">{{
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
const year = useYear()

const props = defineProps({
    works: Object
})

console.log(props.works)

onBeforeMount(() => {
    title.value = props.works.work[0].title
    medium.value = props.works.work[0].medium
    size.value = props.works.work[0].size
    year.value = props.works.work[0].year
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

a.on {
    color: grey !important;
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
    background-color: white;
    z-index: 500;
}

.image-info-title {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 16px;
    right: 16px;
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
    font-size: 70%;
}

.image-info-work-title-holder {
    padding: 0 10px;
}

.image-info-work-title-holder>* {
    display: flex;
    justify-content: center;
    align-items: center;
}

.medium,
.size {
    text-align: center;
}

.image-info-work-title>div>span:first-child {
    text-align: center;
}

.year {
    font-family: "Marist";
}

.year::before {
    content: ", ";
}


@media screen and (min-width: 821px) {
    .image-info-title:hover .image-info-description {
        height: 100%;
    }


}

@media screen and (max-width: 820px) {
    .image-info-work-title-holder {
        width: 80vw;
    }

    .image-info-title {
        max-width: 70vw;
        left: 50vw;
        transform: translateX(-50%);
        text-align: center;
        width: auto;
    }

    .image-info-description {
        display: none;
    }
}
</style>