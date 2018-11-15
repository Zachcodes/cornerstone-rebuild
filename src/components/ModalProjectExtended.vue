<template>
    <div class="project-extended-container">
        Modal Project Extended!
    </div>
</template>

<script>
export default {
    name: 'modalProjectExtended',
    props: ['project']
}
</script>

<style>
.project-extended-container {
    position: absolute;
    /* height: 80%;
    width: 80%; */
    /* background-color: blue;
    top: 0;
    margin: auto; */
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: blue;
    top: 20px;
    bottom: 20px;
    width: 90%;
}
</style>