<template>
    <Works :data="projects"></Works>
</template>

<script setup>
const query = groq`*[_type == "project" && type == "installation"]| order(order asc){order, date, link, title, _id}`

const sanity = useSanity()

const { data: projects } = await useAsyncData('articles', () => sanity.fetch(query))


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
});
</script>