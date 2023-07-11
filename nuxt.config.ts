// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: [ '/public/assets/css/main.css'],
  app: {
    head: {
      title: 'Angelus Schnabl',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "preload", href: "/assets/ABCMarist-Book.otf", as: "font" },
        { rel: "preload", href: "/assets/ABCMarist-BookItalic.otf", as: "font" }
    ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: ['@hypernym/nuxt-gsap', '@nuxtjs/sanity','nuxt-swiper'],
  sanity: {
    projectId: 'x8y7qyk4',
    dataset: 'production'
  }
})
