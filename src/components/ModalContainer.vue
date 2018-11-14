<template>
    <div class="modal-container-main" v-on:click="checkIfActive">
        <div class="modal-header-container">
            <span v-bind:class="[activeTypeState === commercial ? active : '']"
            v-on:click="setActive('commercial')">Commercial </span>| 
            <span v-bind:class="[activeTypeState === residential ? active : '']"
            v-on:click="setActive('residential')">Residential </span>| 
            <span v-bind:class="[activeTypeState === institutional ? active : '']"
            v-on:click="setActive('institutional')">Institutional</span>
        </div>
        <div class="modal-body-container">
            <!-- TODO: Bring in stuff from database -->
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
            <div class="modal-icon-container"></div>
        </div>
        <button v-on:click="closeModal">Close Modal</button>
    </div>
</template>

<script>
export default {
    name: 'modalContainer',
    methods: {
      checkIfActive() {
        //   console.log(this)
      },
      setActive(type) {
        this.activeTypeState = type
      }
    },
    data(props) {
        return {
            commercial: 'commercial',
            residential: 'residential',
            institutional: 'institutional',
            activeTypeState: props.activeType,
            active: 'active'
        }
    },
    props: ['closeModal', 'activeType']
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