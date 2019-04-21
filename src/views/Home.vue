<template>
  <div class="home-main-container" id="home-container">
    <CdgMainSVG/>
  </div>
</template>

<script>
import fn from '../helper'
import CdgMainSVG from '../components/CdgMainSVG.vue'
export default {
  name: 'home',
  data() {
    return {
      mainContainerId: 'home-container'
    }
  },
  components: {
    CdgMainSVG
  },
  mounted() {
    let {createPath, calcNavItems, navToRoute} = fn;
    navToRoute = navToRoute.bind(this)
    calcNavItems.call(this, createPath, navToRoute)
  }
}
</script>

<style>
body {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.home-main-container {
  position: absolute;
  height: 100vh;
  top: 0;
  width: 100%;
}
.cdg-lines {
  max-width: 100%;
  height: 100%;
  width: 100%;
}
.nav-item {
  color: black;
  position: absolute;
}
.nav-item:hover {
  cursor: pointer;
}
.nav-item-active {
  color: red;
}
</style>