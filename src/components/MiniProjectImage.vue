<template>
    <div v-bind:class="[selected ? active : '', thumbnailImageContainer]">
        <img class="thumbnail-image" :src="link"/>
    </div>
</template>

<script>
export default {
    name: 'miniProjectImage',
    props: ['selected', 'link'],
    data() {
        return {
            thumbnailImageContainer: 'thumbnail-image-container',
            active: 'active-mini-image'
        }
    }
}
</script>

<style>
.thumbnail-image-container {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    
}
.active-mini-image {

}
.thumbnail-image {
    width: 100%;
    height: 100%;
    transition: height 2s;
}
</style>