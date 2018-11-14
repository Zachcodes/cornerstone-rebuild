<template>
  <div id="app">
    <div class="nav">
      <img alt="CDG Logo" src="./assets/CDGLogo.svg" class="cdg-logo">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
    box-sizing: border-box;
}
.nav {
  height: 100px;
}
.cdg-logo {
  width: 350px;
}
</style>
