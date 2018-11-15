<template>
    <div class="project-extended-container">
        Modal Project Extended {{project.project_name}}
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
    background-color: blue;
    top: 20px;
    bottom: 20px;
    width: 90%;
}
</style>