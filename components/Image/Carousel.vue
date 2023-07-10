<template>
    <Swiper :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" ref="swipe" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" freeMode: true, freeModeFluid: true :navigation="navigationOptions" @slideChange="onSlideChange"
        :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-100%', 0, 0],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }">
        <SwiperSlide v-for="image in images" :key="slide">
            <SanityImage class="swiper-img" :asset-id="image.asset._ref" auto="format" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
// import { onBeforeMount } from 'vue'
const title = useTitle()
const medium = useMedium()
const size = useSize()

const props = defineProps({
    images: Object
})

const navigationOptions = {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn"
}

function onSlideChange(e) {
    let dat = { ...e }
    let ind = dat.realIndex
    console.log(ind)
    const { $gsap } = useNuxtApp()
    let tl = $gsap.timeline()
    tl.to(".image-info-work-title", {
        opacity: 0,
        filter: "blur(7px)",
        duration: .5
    })
        .add(function () {
            title.value = props.images[ind].title
            medium.value = props.images[ind].medium
            size.value = props.images[ind].size
        }).to(".image-info-work-title", {
            opacity: 1,
            filter: "blur(0px)",
            duration: .5
        })
}


</script>


<style>
.swiper {
    width: calc(100vw - 16px);
    padding: 0;
    margin: 0;
}

.swiper-slide {
    max-height: calc(100vh - 16px);
    width: calc(100vw - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ew-resize;
}

.swiper-img {
    max-height: calc(100vh - 16px) !important;
    height: calc(100vh - 16px) !important;
}
</style>