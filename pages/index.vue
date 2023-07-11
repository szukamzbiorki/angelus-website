<template>
    <div class="siema">
        <img class="cork" src="/assets/cork.png" alt="cork">
    </div>
</template>

<style scoped>
.cork {
    position: absolute;
    width: 200px;
    /* top: 0;
    left: 0; */
}
</style>

<script setup>

// onBeforeMount(() => {
//     const { $gsap } = useNuxtApp()
//     $gsap.set(".cork", {
//         right: "10px",
//         bottom: "10px",
//         opacity: 0,
//         filter: "blur(7px)"
//     })

//     $gsap.set(".header", {
//         opacity: 0,
//         filter: "blur(7px)"
//     })
// })
// onMounted(() => {
//     const { $gsap } = useNuxtApp()
//     let tl = $gsap.timeline({ ease: "power2.inOut", duration: .8 }
//     )
//     tl.to(".cork", {
//         opacity: 1,
//         filter: "blur(0)"
//     })
//         .to(".cork", {
//             right: "10px",
//             bottom: "10px",
//         })
//         .to(".header", {
//             opacity: 1,
//             filter: "blur(0)"
//         })
// })

definePageMeta({
    pageTransition: {
        css: false,
        onBeforeEnter: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.set(el, {
                opacity: 0,
                // yPercent: 50,
                filter: "blur(7px)"
            })
        },
        onEnter: (el, done) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 1,
                // yPercent: 0,
                filter: "blur(0px)",
                duration: .3
            })
        },
        onLeave: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 0,
                // yPercent: 50
            })
        }
    }
})
</script>
