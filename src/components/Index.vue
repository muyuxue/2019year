<template>
    <div class="index" @click.once="fullScreen">
        <img
            class="light animated fadeInDown faster"
            src="../assets/light.png"
            @click="open('/prize')"
        >
        <img class="bottom animated fadeInUp faster" src="../assets/bottom.png">
        <img class="fire animated fadeInUp delay-1s" src="../assets/fire.png">
        <div class="contentBox">
            <img class="bgContent animated lightSpeedIn" src="../assets/bgContent.png">
            <img class="pig animated zoomIn" src="../assets/pig.png">
            <div class="btnBox animated bounceIn delay-1s">
                <img class="animated" src="../assets/btnThree.png" @click="open('/three')">
                <img class="animated" src="../assets/btnSecond.png" @click="open('/second')">
                <img class="animated" src="../assets/btnOne.png" @click="open('/one')">
                <img class="animated" src="../assets/btnElse.png" @click="open('/else')">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        open(path) {
            all.router.push(path);
        },
        fullScreen() {
            all.tool.fullScreen(document.getElementById("app"));
        }
    },
    mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
    background: url("../assets/bg.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    /* min-width: 1920px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.light {
    width: 1.54rem;
    min-width: 154px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
}
.bottom {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
}
.contentBox {
    position: relative;
}
.bgContent {
    width: 1800px;
    height: auto;
}
.pig {
    width: 750px;
    height: auto;
    position: absolute;
    left: 50%;
    margin-left: -375px;
    top: -110px;
}
.fire {
    width: 856px;
    height: auto;
    position: absolute;
    left: 50%;
    margin-left: -428px;
    top: 10px;
}
.btnBox {
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    top: 380px;
}
.btnBox img {
    height: 66px;
    width: auto;
    background: rgba(0, 0, 0, 0);
    margin: 0 50px;
    cursor: pointer;
}
</style>
