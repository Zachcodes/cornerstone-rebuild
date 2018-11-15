<template>
    <div class="modal-icon-container" 
    v-on:click="openExtendedProject(project.id, $event)">
        modal icon 
    </div>
</template>

<script>
export default {
    name: 'modalIcon',
    props: ['project', 'openExtendedProject']
}
</script>

<style>

</style>