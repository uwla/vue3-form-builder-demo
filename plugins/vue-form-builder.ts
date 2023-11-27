import plugin from 'vue-form-builder'

export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(plugin)
})
