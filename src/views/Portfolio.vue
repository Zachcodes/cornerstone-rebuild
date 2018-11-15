<template>
    <div class='portfolio-main-container'
    v-on:click="checkModalStatus">
        portfolio!
        <ModalContainer
        v-if="displayModal"
        :closeModal="closeModal"
        :activeType="activeType"></ModalContainer>
        <button v-on:click="showModal('commercial', $event)">Commercial</button>
        <button v-on:click="showModal('residential', $event)">Residential</button>
        <button v-on:click="showModal('institutional', $event)">Institutional</button>
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
    min-height: calc(100vh - 100px);
}
</style>