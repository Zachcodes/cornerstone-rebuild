<template>
    <div class="modal-container-main" v-on:click="checkIfActive">
        <div class="modal-header-container">
            <span v-bind:class="[activeTypeState === commercial ? active : '']"
            v-on:click="setActiveType('commercial')">Commercial </span>| 
            <span v-bind:class="[activeTypeState === residential ? active : '']"
            v-on:click="setActiveType('residential')">Residential </span>| 
            <span v-bind:class="[activeTypeState === institutional ? active : '']"
            v-on:click="setActiveType('institutional')">Institutional</span>
        </div>
        <div class="modal-body-container">
            <ModalIcon v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            :openExtendedProject="openExtendedProject"
            ></ModalIcon>
        </div>
        <button v-on:click="closeModal">Close Modal</button>
        <ModalProjectExtended v-if="extendedActive"
        :project="extendedProject"></ModalProjectExtended>
    </div>
</template>

<script>
import axios from 'axios';
import ModalIcon from './ModalIcon'
import ModalProjectExtended from './ModalProjectExtended'

export default {
    name: 'modalContainer',
    methods: {
      checkIfActive() {
        //   console.log(this)
      },
      setActiveType(type) {
        this.filteredProjects = this.projects.filter( project => project.type === type)
        this.activeTypeState = type
      },
      openExtendedProject(id) {
        this.extendedProject = this.projects.find( project => project.id === id)
        this.extendedActive = !this.extendedActive
      }
    },
    data(props) {
        return {
            commercial: 'commercial',
            residential: 'residential',
            institutional: 'institutional',
            activeTypeState: props.activeType,
            active: 'active',
            projects: [],
            filteredProjects: [],
            extendedActive: false,
            extendedProject: {}
        }
    },
    props: ['closeModal', 'activeType'],
    components: {
        ModalIcon,
        ModalProjectExtended
    },
    mounted() {
        axios.get('/api/projects').then(res => {
            let {data} = res; 
            this.projects = data;
            this.filteredProjects = data.filter( project => project.type === this.activeTypeState)
        })
    }
}
</script>

<style>
.modal-container-main {
    position: fixed;
    top: 20px;
    right: 20px;
    left: 20px;
    bottom: 20px;
    background-color: #7474743d;
}
.modal-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.modal-body-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px;
}
.modal-icon-container {
    background-color: black;
    width: 30%;
    height: 200px;
    margin-bottom: 20px;
}
.active {
    color: blue;
}
</style>