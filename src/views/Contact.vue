<template>
    <div class="home-main-container" id="contact-container">
        <CdgMainSVG/>
        <form v-on:submit.prevent="submitForm" class="contact-form">
            <div class="contact-form-row spaced">Name: <input v-model="name"/></div>
            <div class="contact-form-row spaced">Email: <input v-model="email" v-on:change="emailChange" v-bind:class="{invalid: emailTouched && !emailValid}"/></div>
            <div class="contact-form-row spaced">Subject: <input v-model="subject"/></div>
            <div class="contact-form-row spaced">Message: <input v-model="message"/></div>
            <div class="contact-form-row">Request callback: <input type="checkbox" v-model="requestCallback"/></div>
            <VueTimepicker format="hh:mm A"
            :minute-interval="5"
            v-model="timeValue"
            v-if="requestCallback"
            class="contact-form-row"></VueTimepicker>
            <div class="contact-form-row spaced">Phone: <input v-model="phone"/></div>
            <button v-on:submit.prevent="submitForm"
            v-bind:disabled="!emailTouched && !emailValid"
            v-bind:class="[!emailClassCheck ? buttonDisabled : '', contactFormButton]">Submit Form</button>
        </form>
        <div class="contact-information-container"> 
            <div class="spaced"><span>Address:</span> <span>222 some address</span></div> 
            <div class="spaced"><span>Phone:</span> <span>999-999-9999</span></div>
            <div class="spaced"><span>Email:</span> <span>john@gmail.com</span></div>
        </div>
    </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker';
import axios from 'axios';
import fn from '../helper'
import CdgMainSVG from '../components/CdgMainSVG.vue'
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
            },
            buttonDisabled: 'button-disabled',
            contactFormButton: 'contact-form-button',
            mainContainerId: 'contact-container'
        }
    },
    components: {
        VueTimepicker,
        CdgMainSVG
    },
    mounted() {
        let {createPath, calcNavItems, navToRoute} = fn;
        navToRoute = navToRoute.bind(this)
        calcNavItems.call(this, createPath, navToRoute)
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
                Vue.toast('')
                this.$toasted.success('Sent email', {duration: 2000})
            }).catch(err => this.$toasted.error('Could not send email', {duration: 2000}))
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
    },
    computed: {
        emailClassCheck() {
            if(this.emailValid && this.emailTouched) return true 
            return false
        }
    }
}
</script>

<style>
.contact-main-container {
  min-height: calc(100vh - 150px);
  position: relative;
}
.invalid {
    border: 1px solid red;
}
.contact-information-container {
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 200px;
    position: relative;
    left: 60%;
    top: 20px;
    transition: box-shadow .3s, background-color .3s;
}
.contact-form {
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 200px;
    position: relative;
    left: 55%;
    transition: box-shadow .3s, background-color .3s;
}
.contact-form:hover {
   background-color: white;
   box-shadow: .5px 1px .5px #888888;
}
.contact-information-container:hover {
   background-color: white;
   box-shadow: .5px 1px .5px #888888;
}
.contact-form-row {
    margin-bottom: 3px;
}
.spaced {
    display: flex;
    justify-content: space-between;
}
.contact-form-button {
    height: 30px;
    width: 100px;
    font-size: 12px;
    margin: auto;
    background-color: #4caf50;
}
.button-disabled {
    background-color: grey;
}
.contact-form-button:hover {
    cursor: pointer;
}
.button-disabled:hover {
    cursor: no-drop;
}
</style>