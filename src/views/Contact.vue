<template>
    <div class="contact-main-container">
        <div class="contact-information-container"> 
            <div><span>Address: my address</span></div> 
            <div><span>Phone: my phone</span></div>
            <div><span>Email: my email</span></div>
        </div>
        <form v-on:submit.prevent="submitForm">
            <div>Name: <input v-model="name"/></div>
            <div>Email: <input v-model="email" v-on:change="emailChange" v-bind:class="{invalid: emailTouched && !emailValid}"/></div>
            <div>Subject: <input v-model="subject"/></div>
            <div>Message: <input v-model="message"/></div>
            <div>Request callback: <input type="checkbox" v-model="requestCallback"/></div>
            <VueTimepicker format="hh:mm A"
            :minute-interval="5"
            v-model="timeValue"
            v-if="requestCallback"></VueTimepicker>
            <div>Phone: <input v-model="phone"/></div>
            <button v-on:submit.prevent="submitForm"
            v-bind:disabled="!emailTouched && !emailValid">Submit Form</button>
        </form>
    </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker';
import axios from 'axios';

export default {
    name: 'contact',
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            emailTouched: false,
            emailValid: false,
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
            let { name, email, subject, message, requestCallback, phone, timeValue } = this;
            let emailInformation = {
                name,
                email,
                subject,
                message,
                requestCallback,
                phone,
                timeValue
            }
            axios.post('/api/contact', emailInformation).then( res => {
                alert('Success')
            }).catch(err => alert("Couldn't send your email"))
        },
        emailChange() {
            if(this.email) {
                this.emailTouched = true;
                let validEmail = emailCheck(this.email)
                if(validEmail) {
                    this.emailValid = true
                }
                else {
                    this.emailValid ? this.emailValid = false : null;
                }
            } else {
                this.emailValid ? this.emailValid = false : null
                this.emailTouched ? this.emailTouched = false : null
            }
            function emailCheck(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        }
    }
}
</script>

<style>
.invalid {
    border: 1px solid red;
}
</style>