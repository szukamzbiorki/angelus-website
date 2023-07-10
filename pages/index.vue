<template>
    <div class="siema">
        Człowieku
    </div>
</template>

<script setup>
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
