<template>
    <div class="project-extended-container">
        <div class="focused-image-container">
            <img class="focused-image" :src="mainDisplayedImage"/>
        </div>
        <div class="thumbnail-container">
            <img class="thumbnail-image" v-for="(link, i) in project.image_links"
            :key="project.id + Math.random()"
            :src="link"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modalProjectExtended',
    props: ['project'],
    data() {
        return {
            intervalId: 0,
            startingPictureIndex: 0
        }
    },
    computed: {
        mainDisplayedImage() {
            let link = this.project.image_links[this.startingPictureIndex]
            return link
        }
    },
    mounted() {
        if(this.project.image_links.length && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.startingPictureIndex === this.project.image_links.length - 1 ? this.startingPictureIndex = 0 : this.startingPictureIndex += 1;
            }, 4000)
        }
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
.focused-image-container {
    width: 70%;
    height: 100%;
}
.focused-image {
    height: 100%;
    width: 100%;
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
</style>