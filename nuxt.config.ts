// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "nuxt-primevue",
        // "@nuxt-alt/vuetify",
    ],
    build: {
        // transpile: ['vuetify']
    },
    css: [
        'primevue/resources/themes/lara-light-teal/theme.css',
        'vue-form-builder/dist/style.css',
    ],
    primevue: {
        components: {
            include: [
                "Button", "InputText", "Dialog", "Textarea",
                "TabView", "TabPanel", "ColorPicker", "Dropdown",
                "Rating", "Chips", "Calendar"
            ],
        },
    },
} as any);
