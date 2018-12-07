<template>
  <div class="home-main-container" id="home-container">
    <!-- <img src="../assets/cdglines.svg" class="cdg-lines" id="mysvg"/> -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24000 24000"
      width="100%"
      height="100%"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="cdg-lines"
      id="mysvg">
      <defs>
        <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="1022.53" y1="14839.1" x2="23811.1" y2="14839.1">
        <stop offset="0" style="stop-opacity:1; stop-color:white"/>
        <stop offset="0.0509804" style="stop-opacity:1; stop-color:white"/>
        <stop offset="0.180392" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.788235" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.968627" style="stop-opacity:1; stop-color:white"/>
        <stop offset="1" style="stop-opacity:1; stop-color:white"/>
        </linearGradient>
        <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="7130.72" y1="12463.2" x2="23904.4" y2="10403">
        <stop offset="0" style="stop-opacity:1; stop-color:white"/>
        <stop offset="0.0313725" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.690196" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.960784" style="stop-opacity:1; stop-color:white"/>
        <stop offset="1" style="stop-opacity:1; stop-color:white"/>
        </linearGradient>
        <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="2221.96" y1="11432.5" x2="13449.7" y2="11432.5">
        <stop offset="0" style="stop-opacity:1; stop-color:white"/>
        <stop offset="0.0313725" style="stop-opacity:1; stop-color:white"/>
        <stop offset="0.180392" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.870588" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="0.878431" style="stop-opacity:1; stop-color:#BDBDBE"/>
        <stop offset="1" style="stop-opacity:1; stop-color:white"/>
        </linearGradient>
      </defs>
      <g id="__x0023_Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <polygon class="fil0" points="2231,-599 2222,-595 13441,23464 13450,23461 " id="topleft-bottomright" vector-effect="non-scaling-stroke"/>
        <polygon class="fil1" points="23806,9522 1023,20146 1027,20156 23811,9532 " id="bottomleft-topright" vector-effect="non-scaling-stroke"/>
        <path class="fil2" d="M8476 23428c6,-1 10,-2 15,-2 730,-9777 5961,-18615 14068,-23972 -1,-4 -1,-9 -2,-15 -8116,5357 -13351,14204 -14081,23989z" id="bottommiddle-topright" vector-effect="non-scaling-stroke"/>
        <polygon class="fil3" points="9958,15977 10247,15843 10112,15553 9823,15689 " vector-effect="non-scaling-stroke"/>
        <g id="_2446627744832">
        </g>
      </g>
    </svg> -->
    <CdgMainSVG/>
  </div>
</template>

<script>
import fn from '../helper'
import CdgMainSVG from '../components/CdgMainSVG.vue'
console.log(CdgMainSVG)
export default {
  name: 'home',
  data() {
    return {
      mainContainerId: 'home-container'
    }
  },
  // components: {
  //   CdgMainSvg
  // },
  components: {
    CdgMainSVG
  },
  mounted() {
    let {createPath, calcNavItems} = fn;
    calcNavItems.call(this, createPath)
    
    // let currentPath = this.$router.history.current.path
    // let currentRouteName = this.$router.history.current.name
    // let routePathObjects = [
    //   {
    //     path: '/',
    //     text: 'Home',
    //     m1: '5000 3000',
    //     l1: '4000 3500',
    //     m2: '4000 3500',
    //     l2: '3000 3500',
    //     id: `${currentRouteName}-line-1`
    //   },
    //   {
    //     path: '/portfolio',
    //     text: 'Portfolio',
    //     m1: '6000 4000',
    //     l1: '5000 4500',
    //     m2: '5000 4500',
    //     l2: '4000 4500',
    //     id: `${currentRouteName}-line-2`
    //   },
    //   {
    //     path: '/philosophy',
    //     text: 'Philosophy',
    //     m1: '7000 5000',
    //     l1: '6000 5500',
    //     m2: '6000 5500',
    //     l2: '5000 5500',
    //     id: `${currentRouteName}-line-3`
    //   },
    //   {
    //     path: '/contact',
    //     text: 'Contact',
    //     m1: '8000 6000',
    //     l1: '7000 6500',
    //     m2: '7000 6500',
    //     l2: '6000 6500',
    //     id: `${currentRouteName}-line-4`
    //   }
    // ]
    // let mysvg = document.getElementById('mysvg')
    // let NS = mysvg.getAttribute('xmlns')
    // let leftLine = document.getElementById('topleft-bottomright')
    // let dimensions = leftLine.getBoundingClientRect();
    // routePathObjects.forEach( pathObj => {
    //   let newPath = this.createPath(pathObj)
    //   mysvg.appendChild(newPath)
    //   let line = document.getElementById(pathObj.id)
    //   let lineDimensions = line.getBoundingClientRect();
    //   let newRow = document.createElement('span')
    //   newRow.setAttribute("value", pathObj.path)
    //   let innerText = document.createTextNode(pathObj.text)
    //   newRow.appendChild(innerText)
    //   newRow.classList.add('nav-item')
    //   newRow.style.top = lineDimensions.y - 150 - 10 + 'px';
    //   newRow.style.left = lineDimensions.x - 25 + 'px'
    //   newRow.addEventListener('click', this.navToRoute)

    //   let mainContainer = document.getElementById(this.mainContainerId)
    //   mainContainer.appendChild(newRow)
    // })
  },
  methods: {
    navToRoute(e) {
      let route = e.target.getAttribute('value')
      this.$router.push(route)
    },
    createPath(points) {
      let {m1, l1, m2, l2, id} = points;
      let d = `M${m1} L${l1} Z M${m2} L${l2} Z` 
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', 'rgb(0,0,0)');
      path.setAttribute('stroke-width', '1');
      path.setAttribute('id', id);
      return path;
    }
  }
}
</script>

<style>
body {
  /* background-image: url("../assets/cdglines.svg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.home-main-container {
  /* background-image: url("../assets/cdglines.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
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