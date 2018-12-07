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
  min-height: calc(100vh - 150px);
  /* NOTE: min-height will not set the height of the svg. Must use explicit height percentage for some reason?*/
  /* height: 400px;
  width: 400px; */
  position: relative;
}
.cdg-lines {
  max-width: 100%;
  height: 100%;
  width: 100%;
}
.fil3 {
  fill:#E94057;
  fill-rule:nonzero;
}
.fil1 {
  fill:url(#id0);
  fill-rule:nonzero;
}
.fil2 {
  fill:url(#id1);
  fill-rule:nonzero;
}
.fil0 {
  fill:url(#id2); 
  fill-rule:nonzero;
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