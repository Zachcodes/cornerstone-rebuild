<template>
  <div class="philosophy-main-container" id="philosophy-container">
    <CdgMainSVG/>
    <div class="philosophy-main-text-container philosophy-left">
        <div class="philosophy-text-square"></div>
        <div class="philosophy-text-line"></div>
        <div class="philosophy-text-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
    </div>
    <div class="philosophy-main-text-container philosophy-right">
        <div class="philosophy-text-square"></div>
        <div class="philosophy-text-line"></div>
        <div class="philosophy-text-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
    </div>
    <div class="philosophy-main-text-container philosophy-bottom">
        <div class="philosophy-text-square"></div>
        <div class="philosophy-text-line"></div>
        <div class="philosophy-text-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
    </div>
  </div>
</template>

<script>
import fn from '../helper'
import CdgMainSVG from '../components/CdgMainSVG.vue'
export default {
    name: 'philosophy',
    data() {
      return {
        mainContainerId: 'philosophy-container'
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
.philosophy-main-container {
  min-height: calc(100vh - 150px);
  position: relative;
}
.philosophy-main-text-container {
  display: flex;
  box-sizing: border-box;
  width: 300px;
  padding: 5px;
  color: #00000061;
  justify-content: flex-start;
  position: absolute;
  z-index: 1000;
}
.philosophy-main-text-container:hover {
  background-color: #8080801a;
  color: black;
  cursor: default;
}
.philosophy-main-text-container:hover > .philosophy-text-square {
  background-color: red;
  cursor: default;
}
.philosophy-text-square {
  width: 5%;
  background-color: black;
  height: 5px;
}
.philosophy-text-line {
  border-left: .5px solid black;
}
.philosophy-text-text {
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  margin-left: 4px;
}
.philosophy-left {
  left: 30%;
}
.philosophy-right {
  left: 60%;
}
.philosophy-bottom {
  left: 55%;
  top: 50%;
}
</style>