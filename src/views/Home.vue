<template>
  <div class="home-main-container">
    <!-- <img src="../assets/cdglines.svg" class="cdg-lines"/> -->
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
body {
  background-image: url("../assets/cdglines.svg");
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
}
.cdg-lines {
  max-width: 100%;
  height: 700px;
  display: block;
}
</style>