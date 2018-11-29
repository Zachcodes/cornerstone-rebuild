<template>
    <div class="modal-container-main" v-on:click="registerClick">
        <div class="modal-header-container">
            <span v-bind:class="[activeTypeState === commercial ? active : '']"
            v-on:click="setActiveType('commercial', $event)">Commercial </span>| 
            <span v-bind:class="[activeTypeState === residential ? active : '']"
            v-on:click="setActiveType('residential', $event)">Residential </span>| 
            <span v-bind:class="[activeTypeState === institutional ? active : '']"
            v-on:click="setActiveType('institutional', $event)">Institutional</span>
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
      setActiveType(type, e) {
        this.filteredProjects = this.projects.filter( project => project.type === type)
        this.activeTypeState = type
        e.stopPropagation();
      },
      openExtendedProject(id, e) {
        this.extendedProject = this.projects.find( project => project.id === id)
        this.extendedActive = true
        e.stopPropagation();
      },
      registerClick(e) {
        this.extendedActive ? this.extendedActive = false : null;
        e.stopPropagation()
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
    overflow: auto;
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
    padding: 0 15px;
}
.active {
    color: blue;
}
</style>