// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    devtools: { enabled: true },
    colorMode: {
        preference:'dark',
        classSuffix: '',
    },
    css:[
        'assets/css/style.css',
    ]
})
