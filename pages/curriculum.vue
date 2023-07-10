<template>
    <Curri :info="data[0]"></Curri>
</template>
<script setup>

const query = groq`*[_type == "cv"]{name, birthday, expos[], education[], upexpos[]}`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () => sanity.fetch(query))

definePageMeta({
    layout: "default",
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
});
</script>