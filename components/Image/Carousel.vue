<template>
    <Swiper :modules="[SwiperNavigation, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
        ref="swipe" :navigation="navigationOptions" @slideChange="onSlideChange" :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-100%', 0, 0],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }">
        <SwiperSlide v-for="image in works.work" :key="image._id">
            <SanityImage class="swiper-img" :asset-id="image.asset._ref" auto="format" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
const title = useTitle()
const medium = useMedium()
const size = useSize()

const props = defineProps({
    works: Object,
    pending: Boolean
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
            title.value = props.works.work[ind].title
            medium.value = props.works.work[ind].medium
            size.value = props.works.work[ind].size
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
    cursor: default;
}

.swiper-img {
    max-height: calc(100vh - 16px) !important;
}

@media screen and (max-width: 820px) {
    .swiper-slide {
        /* max-height: calc(100vh - 16px); */
        /* height: calc(100vh - 16px); */
        height: -webkit-fill-available;
        width: calc(100vw - 16px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-wrapper {
        gap: 0;
    }

    .swiper-img {
        /* max-height: calc(100vh - 16px) !important; */
        /* height: calc(100vh - 16px) !important; */
        max-width: calc(100vw - 16px) !important;
        /* height: calc(100vh - 16px) !important; */
    }
}
</style>