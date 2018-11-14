<template>
    <div>
        portfolio!
        <ModalContainer
        v-if="displayModal"
        :closeModal="closeModal"></ModalContainer>
        <button v-on:click="showModal('Commercial')">Commercial</button>
        <button v-on:click="showModal('Residential')">Residential</button>
        <button v-on:click="showModal('Institutional')">Institutional</button>
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
          displayModal: false
      }
  }, 
  methods: {
      showModal(arg) {
          console.log('arg', arg)
          this.displayModal = true
      },
      closeModal() {
          this.displayModal = false
      }
  }
}
</script>