<template>
    <canvas id="cdg-graphic" v-insert-message width="200" height="200">adsf</canvas>
</template>

<script>
export default {
    name: 'Cdg-graphic',
    directives: {
        insertMessage(canvasElement) {
            let ctx = canvasElement.getContext("2d")
            // ctx.translate(0, canvasElement.height);
            // ctx.scale(1, -1);
            ctx.beginPath();
            ctx.moveTo(30, 200)
            ctx.quadraticCurveTo(100, 20, 120, 50);
            ctx.stroke();
            ctx.moveTo(40, 200)
            ctx.lineTo(20, 0)
            ctx.stroke()

        }
    }
}
</script>

<style>
#cdg-graphic {
    position: relative;
    top: 100px;
    left: 200px;
    background-color: red;
}
</style>