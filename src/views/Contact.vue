<template>
    <div class="contact-main-container">
        <form v-on:submit.prevent="submitForm">
            <div>Name: <input v-model="name"/></div>
            <div>Email: <input v-model="email"/></div>
            <div>Subject: <input v-model="subject"/></div>
            <div>Message: <input v-model="message"/></div>
            <div>Request callback: <input type="checkbox" v-model="requestCallback"/></div>
            <button v-on:submit.prevent="submitForm">Submit Form</button>
        </form>
    </div>
</template>

<script>
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
            timeToCall: '12:00 pm'
        }
    },
    methods: {
        submitForm() {
            console.log(this)
        }
    }
}
</script>

<style>

</style>