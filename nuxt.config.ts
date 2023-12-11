// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "nuxt-primevue",
        "@nuxt-alt/vuetify",
    ],
    css: [
        'primevue/resources/themes/lara-light-teal/theme.css',
        'vue-form-builder/dist/style.css',
    ],
    primevue: {
        components: {
            include: [
                "Button", "InputText", "Dialog", "Textarea",
                "TabView", "TabPanel"
            ],
        },
    },
    vuetify: {
        pluginOptions: { styles: 'none' }
    }
} as any);
