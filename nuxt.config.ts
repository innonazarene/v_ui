// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    devtools: { enabled: true },
    colorMode: {classSuffix: '',},
    css:[
        'assets/css/style.css',
    ]
})