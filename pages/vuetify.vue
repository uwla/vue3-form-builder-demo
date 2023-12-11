<template>
    <div style="max-width: 400px; margin: 0 auto">
        <h1>VUETIFY DEMO</h1>
        <v-btn stacked>Button</v-btn>
        <br><br>
        <v-combobox label="Combobox"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
        </v-combobox>
        <br>
        <v-otp-input></v-otp-input>
    </div>
</template>
<style src="vuetify/dist/vuetify.min.css"></style>
