<template>
    <div class="modal-icon-container" 
    v-on:click="openExtendedProject(project.id, $event)">
        <div class="modal-icon-picture-container">
            <img class="modal-icon-picture" :src="project.image_links[0]"/>
        </div>
        <div class="modal-icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> 
    </div>
</template>

<script>
export default {
    name: 'modalIcon',
    props: ['project', 'openExtendedProject']
}
</script>

<style>
.modal-icon-container {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
.modal-icon-container:hover {
    cursor: pointer;
}
.modal-icon-picture-container {
    width: 30%;
    max-width: 300px;
    height: 100%;
    display: flex;
}
.modal-icon-picture {
    width: 100%;
    height: 100%;
}
.modal-icon-text {
    width: 65%;
}
</style>