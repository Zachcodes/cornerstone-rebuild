<template>
    <div class="project-extended-container" v-on:click="registerClick">
        <div class="focused-image-container">
            <img class="focused-image" :src="mainDisplayedImage"/>
        </div>
        <div class="thumbnail-container">
            <!-- <div v-for="(link, i) in project.image_links" v-bind:class="[startingPictureIndex === i ? active : '', thumbnailImageContainer]"
            :key="project.id + Math.random()"
            >
                <img class="thumbnail-image" :src="link"/>
            </div> -->
            <MiniProjectImage v-for="(link, i) in project.image_links"
            :key="project.id + Math.random()"
            :selected="i === startingPictureIndex"
            :link="link"           
            />
        </div>
    </div>
</template>

<script>
import MiniProjectImage from './MiniProjectImage.vue'
export default {
    name: 'modalProjectExtended',
    props: ['project'],
    components: {
        MiniProjectImage
    },
    data() {
        return {
            intervalId: 0,
            startingPictureIndex: 0,
            thumbnailImage: 'thumbnail-image',
            active: 'active-image',
            thumbnailImageContainer: 'thumbnail-image-container'
        }
    },
    methods: {
        registerClick(e) {
            e.stopPropagation();
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
            }, 8000)
        }
    }
}
</script>

<style>
.project-extended-container {
    position: fixed;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: white;
    top: 10%;
    bottom: 10%;
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
/* .thumbnail-image-container {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
.thumbnail-image {
    width: 100%;
    height: 100%;
}
.active-image {
    height: 120px;
    transition: height 2s;
} */
</style>