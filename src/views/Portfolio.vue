<template>
    <div class='portfolio-main-container'
    v-on:click="checkModalStatus">
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
export default {
  name: 'portfolio',
  components: {
      ModalContainer
  },
  data() {
      return {
          displayModal: false,
          activeType: 'commercial'
      }
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
  /* background-image: url("../assets/cdglines.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  min-height: calc(100vh - 150px);
}
.modal-open-button:hover {
    cursor: pointer;
}
</style>