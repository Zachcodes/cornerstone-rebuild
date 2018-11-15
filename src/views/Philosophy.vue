<template>
  <div class="philosophy-main-container">
    <h1>This is the philosophy page</h1>
    <div class="philosophy-main-text-container">
        <div class="philosophy-text-square"></div>
        <div class="philosophy-text-line"></div>
        <div class="philosophy-text-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
    </div>
    <div class="philosophy-main-text-container">
        <div class="philosophy-text-square"></div>
        <div class="philosophy-text-line"></div>
        <div class="philosophy-text-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
    </div>
    <div class="philosophy-main-text-container">
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
export default {
    name: 'philosophy'
}
</script>

<style>
.philosophy-main-text-container {
  display: flex;
  box-sizing: border-box;
  width: 300px;
  padding: 5px;
  position: absolute;
  color: #00000061;
  justify-content: flex-start;
}
.philosophy-main-text-container:hover {
  background-color: #8080801a;
  color: black;
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
</style>