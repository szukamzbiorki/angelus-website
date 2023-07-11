<template>
    <BioHeader :data="data[0]"></BioHeader>
</template>
<script setup>
const query = groq`*[_type == "bio"]`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () => sanity.fetch(query))

definePageMeta({
    layout: "default",
    pageTransition: {
        css: false,
        onBeforeEnter: (el) => {
            const { $gsap } = useNuxtApp()
            let mm = $gsap.matchMedia();

            mm.add("(min-width: 820px)", () => {
                $gsap.set(el, {
                    opacity: 0,
                    filter: "blur(7px)"
                })
            });

            mm.add("(max-width: 819px)", () => {
                const { $gsap } = useNuxtApp()
                $gsap.set(el, {
                    opacity: 0,
                })
            });

        },
        onEnter: (el, done) => {
            const { $gsap } = useNuxtApp()
            let mm = $gsap.matchMedia();
            mm.add("(min-width: 820px)", () => {
                $gsap.to(el, {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: .3
                })
            });
            mm.add("(max-width: 819px)", () => {
                $gsap.to(el, {
                    opacity: 1,
                    duration: .3
                })
            });
        },
        onLeave: (el) => {
            const { $gsap } = useNuxtApp()
            let mm = $gsap.matchMedia();
            mm.add("(min-width: 820px)", () => {
                $gsap.to(el, {
                    opacity: 0,
                    filter: "blur(7px)"
                })
            });

            mm.add("(max-width: 819px)", () => {
                $gsap.to(el, {
                    opacity: 0
                })
            });
        }
    }
})
</script>