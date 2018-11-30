<template>
    <transition name="mini-image"
    v-on:before-enter="enter"
    v-on:enter="afterEnter"
    v-on:leave="leave">
        <div v-if="selected">
            <img class="thumbnail-image" :src="link"/>
        </div>
        <div v-else>
            <img class="thumbnail-image" :src="link"/>
        </div>
    </transition>
    <!-- <transition name="mini-image">
        <div v-if="selected" class="thumbnail-image-container active-mini-image">
            <img class="thumbnail-image" :src="link"/>
        </div>
        <div v-else class="thumbnail-image-container">
            <img class="thumbnail-image" :src="link"/>
        </div>
    </transition> -->
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
    },
    methods: {
        enter(el) {
            console.log(1)
        },
        afterEnter(el) {
            console.log(2)

        },
        leave(el) {
            console.log(3)

        },
        afterLeave(el) {
            console.log(4)
        }
    }
}
</script>

<style>
/* .thumbnail-image-container {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
.active-mini-image {
    height: 120px;
    transition: height 2s;
} */
.mini-image-enter {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
.mini-image-leave {
    height: 120px;
    transition: height 2s;
}
.thumbnail-image {
    width: 100%;
    height: 100%;
}
</style>