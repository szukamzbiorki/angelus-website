<template>
    <div v-if="show" @click="dissolve" class="siema">
        <img class="cork" src="/assets/cork.png" alt="cork">
    </div>
</template>

<style scoped>
.siema {
    background-color: white;
    width: 100vw;
    height: -webkit-fill-available;
    position: absolute;
    top: 0;
    left: 0;
}

.cork {
    position: absolute;
    width: 300px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
}
</style>

<script setup>
const show = ref(true)

function dissolve() {
    const { $gsap } = useNuxtApp()
    let tl = $gsap.timeline()
    tl.to(".siema", {
        opacity: 0,
        filter: "blur(7px)",
        duration: 1
    }).add(function () {
        show.value = false
    })
}

definePageMeta({
    pageTransition: {
        css: false,
        onBeforeEnter: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.set(el, {
                opacity: 0,
                filter: "blur(7px)"
            })
        },
        onEnter: (el, done) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 1,
                filter: "blur(0px)",
                duration: .3
            })
        },
        onLeave: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 0,
            })
        }
    }
})
</script>
