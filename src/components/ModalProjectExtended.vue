<template>
    <div class="project-extended-container" v-on:click="registerClick">
        <div class="focused-image-container">
            <img class="focused-image" :src="mainDisplayedImage"/>
            <div class="navigation-image-bar">
                <div class="arrow-container left" v-on:click="shiftImage('left')">
                    <font-awesome-icon :icon="{prefix: 'fa', iconName: 'angle-left'}" class="project-arrow"></font-awesome-icon>
                </div>
                <div class="arrow-container right" v-on:click="shiftImage('right')">
                    <font-awesome-icon :icon="{prefix: 'fa', iconName: 'angle-right'}" class="project-arrow"></font-awesome-icon>
                </div>
            </div>
        </div>
        <div class="thumbnail-container">
            <MiniProjectImage v-for="(link, i) in project.image_links"
            :key="project.id + Math.random()"
            :selected="i === startingPictureIndex"
            :link="link"
            :index="i"
            :selectMainImage="selectMainImage"      
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
        },
        shiftImage(direction) {
            if(this.intervalId) clearInterval(this.intervalId)
            if(direction === 'left') {
                this.startingPictureIndex = this.startingPictureIndex === 0 ? this.project.image_links.length - 1 : this.startingPictureIndex -= 1
            } else {
                this.startingPictureIndex = this.startingPictureIndex === this.project.image_links.length - 1 ? 0 : this.startingPictureIndex += 1
            }
            this.intervalId = setInterval(() => {
                this.startingPictureIndex === this.project.image_links.length - 1 ? this.startingPictureIndex = 0 : this.startingPictureIndex += 1;
            }, 4000)
        },
        selectMainImage(index) {
            this.startingPictureIndex = index;
            if(this.intervalId) clearInterval(this.intervalId)
            this.intervalId = setInterval(() => {
                this.startingPictureIndex === this.project.image_links.length - 1 ? this.startingPictureIndex = 0 : this.startingPictureIndex += 1;
            }, 4000)
        },
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
    position: absolute;
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
    position: relative;
    display: flex;
    align-items: center;
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
    overflow: auto;
}
.arrow-container {
    position: absolute;
    height: 100%;
    width: 5%;
    background-color: #ffffff3d;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}
.arrow-container:hover {
    width: 6%;
    cursor: pointer;
    transition: width 1s;
}
.arrow-container:hover {
    background-color: #ffffffa8;
}
.project-arrow {
    font-size: 34px;
    color: black;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
.navigation-image-bar {
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff3d;
}
</style>