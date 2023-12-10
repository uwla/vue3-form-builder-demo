<template>
    <h1>Hello</h1>
    <vfb id="options" :fields="fieldsOptions" v-model="m" /> 

    <TabView id="demo">
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
    emptyModel,
    messages,
    errors,
    validation,
} from "./data";

const emptyErrors = {}
const emptyMsg = {}

export default defineComponent({
    computed: {
        commonParams() {

            return {
                errors: (this.m.showErrors) ? errors : emptyErrors,
                modelValue: (this.m.useModel) ? model : emptyModel,
                messages: (this.m.showMessages) ? messages : emptyMsg,
                validateOnInput: this.m.validateOnInput,
                validateOnSubmit: this.m.validateOnSubmit,
                // validation,
            }
        } 
    },
    data: () => {
        return {
            fields1,
            fields2,
            fields3,
            fieldsOptions: [ 
                'checkbox|name:validateOnInput',
                'checkbox|name:validateOnSubmit',
                'checkbox|name:showMessages',
                'checkbox|name:showErrors',
                'checkbox|name:useModel',
            ],
            m: {
                validateOnInput: true,
                validateOnSubmit: true,
                useModel: false,
                showMessages: false,
                showErrors: false,
            },
        }
    },
});
</script>
<style>
#options .vfb-group {
    margin-bottom: 0;
}

#demo form {
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
