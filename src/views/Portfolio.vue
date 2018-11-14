<template>
    <div>
        portfolio!
        <ModalContainer
        v-if="displayModal"
        :closeModal="closeModal"
        :activeType="activeType"></ModalContainer>
        <button v-on:click="showModal('commercial')">Commercial</button>
        <button v-on:click="showModal('residential')">Residential</button>
        <button v-on:click="showModal('institutional')">Institutional</button>
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
      showModal(arg) {
          this.activeType = arg;
          this.displayModal = true
      },
      closeModal() {
          this.displayModal = false
      }
  }
}
</script>