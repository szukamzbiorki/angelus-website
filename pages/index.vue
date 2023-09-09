<template>
    <div v-if="show" @click="dissolve" class="siema">
        <SanityImage class="cork" q="100" :w="400" :asset-id="images.imgs[image].asset._ref" auto="format" />
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
    cursor: pointer;
    position: absolute;
    width: 300px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 820px) {
    .cork {
        width: 70vw;
    }
}
</style>

<script setup>
const query = groq`*[_type == "landing"]{imgs[]}[0]`

const sanity = useSanity()

const { data: images } = await useAsyncData('images', () => sanity.fetch(query))
const show = ref(true)
const image = ref(0)

onBeforeMount(() => {
    image.value = Math.floor(Math.random() * images.value.imgs.length)
})

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
