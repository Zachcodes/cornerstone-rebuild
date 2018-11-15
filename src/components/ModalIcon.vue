<template>
    <div class="modal-icon-container" 
    v-on:click="flipStatus(project.id)">
        modal icon
    </div>
</template>

<script>
export default {
    name: 'modalIcon',
    props: ['project', 'flipStatus']
}
</script>

<style>

</style>