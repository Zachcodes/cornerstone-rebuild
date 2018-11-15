<template>
    <div class="contact-main-container">
        <form v-on:submit.prevent="submitForm">
            <div>Name: <input v-model="name"/></div>
            <div>Email: <input v-model="email"/></div>
            <div>Subject: <input v-model="subject"/></div>
            <div>Message: <input v-model="message"/></div>
            <div>Request callback: <input type="checkbox" v-model="requestCallback"/></div>
            <VueTimepicker format="hh:mm A"
            :minute-interval="5"
            v-model="timeValue"
            v-if="requestCallback"></VueTimepicker>
            <button v-on:submit.prevent="submitForm">Submit Form</button>
        </form>
    </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
export default {
    name: 'contact',
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            requestCallback: false,
            phone: '',
            timeValue: {
                hh: "12",
                mm: "00",
                A: "PM"
            }
        }
    },
    components: {
        VueTimepicker
    },
    methods: {
        submitForm() {
            console.log(this.timeValue)
        }
    }
}
</script>

<style>

</style>