<template>
    <h1>Hello</h1>
    <TabView>
        <TabPanel header="VueFormBuilder">
            <vfb v-bind="commonParams" :fields="fields1" />
        </TabPanel>
        <TabPanel header="PrimeVue">
            <vfb v-bind="commonParams" :fields="fields2" provider="primevue" />
        </TabPanel>
    </TabView>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
    fields1,
    fields2,
    fields3,
    model,
    messages,
    errors,
    validation,
} from "./data";

const commonParams = { model, messages, errors, validation };

export default defineComponent({
    computed: {
        commonParams() {
            return {
                errors,
                model,
                messages,
                validation,
                validateOnInput: this.validateOnInput,
                validateOnSubmit: this.validateOnSubmit,
            }
        } 
    },
    data: () => {
        return {
            fields1, fields2, fields3,
            validateOnInput: true,
            validateOnSubmit: true,
        }
    }
});
</script>
<style>
form {
    max-width: 500px;
    border: 1px solid #bbb;
    border-radius: 0.25em;
    padding: 1em;
    margin: 0 auto;
}

.p-inputtext, .p-textarea {
    display: block;
    width: 100%;
}
</style>
