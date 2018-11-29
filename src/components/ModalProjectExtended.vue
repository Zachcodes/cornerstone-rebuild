<template>
    <div class="project-extended-container">
        <div class="focused-image"></div>
        <div class="thumbnail-container">
            <div class="thumbnail-image a"></div>
            <div class="thumbnail-image b"></div>
            <div class="thumbnail-image c"></div>
            <div class="thumbnail-image d"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modalProjectExtended',
    props: ['project'],
    mounted() {
        console.log(this._props.project)
    }
}
</script>

<style>
.project-extended-container {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: white;
    top: 20px;
    bottom: 20px;
    width: 70%;
    padding: 20px;
    display: flex;
}
.focused-image {
    width: 70%;
    background-color: black;
}
.thumbnail-container {
    width: 30%;
    display: flex;
    padding: 0 10px;
    flex-direction: column;
}
.thumbnail-image {
    background-color: black;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
.a {
    background-color: black;
}
.b {
    background-color: red;
}
.c {
    background-color: green;
}
.d {
    background-color: blue;
}
</style>