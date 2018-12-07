<template>
    <div class='portfolio-main-container'
    id="portfolio-container"
    v-on:click="checkModalStatus">
        <CdgMainSVG/>
        <ModalContainer
        v-if="displayModal"
        :closeModal="closeModal"
        :activeType="activeType"></ModalContainer>
        <button v-on:click="showModal('commercial', $event)" class="modal-open-button">Commercial</button>
        <button v-on:click="showModal('residential', $event)" class="modal-open-button">Residential</button>
        <button v-on:click="showModal('institutional', $event)" class="modal-open-button">Institutional</button>
    </div>
</template>

<script>
import ModalContainer from '../components/ModalContainer'
import fn from '../helper'
import CdgMainSVG from '../components/CdgMainSVG.vue'
export default {
  name: 'portfolio',
  components: {
      ModalContainer,
      CdgMainSVG
  },
  data() {
      return {
          displayModal: false,
          activeType: 'commercial',
          mainContainerId: 'portfolio-container'
      }
  }, 
  mounted() {
    let {createPath, calcNavItems, navToRoute} = fn;
    navToRoute = navToRoute.bind(this)
    calcNavItems.call(this, createPath, navToRoute)
  },
  methods: {
      showModal(arg, e) {
          this.activeType = arg;
          this.displayModal = true
          e.stopPropagation();
      },
      closeModal() {
          this.displayModal = false
      },
      checkModalStatus() {
          this.displayModal ? this.displayModal = false : null
      }
  }
}
</script>

<style>
.portfolio-main-container {
  min-height: calc(100vh - 150px);
  position: relative;
}
.modal-open-button:hover {
    cursor: pointer;
}
</style>