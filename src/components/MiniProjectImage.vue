<template>
    <div v-bind:class="[selected ? active : '', thumbnailImageContainer]" v-on:click="selectMainImage(index)">
        <img class="thumbnail-image" :src="link"/>
    </div>
</template>

<script>
export default {
    name: 'miniProjectImage',
    props: ['selected', 'link', 'index', 'selectMainImage'],
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
    height: 150px;
    margin-bottom: 10px;
    
}
.thumbnail-image-container:hover {
    cursor: pointer;
}
.active-mini-image {

}
.thumbnail-image {
    width: 100%;
    height: 100%;
    transition: height 2s;
}
</style>