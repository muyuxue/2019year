<template>
    <div class="one">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png" @click="prizes">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="contentBox">
            <img class="title animated rubberBand" src="../assets/btnOne.png" @click="fresh">
            <div class="gameBar">
                <div
                    class="pigBar animated zoomIn"
                    v-for="(item,index) in pigList"
                    :class="'delay'+index"
                    :key="index"
                >
                    <img
                        class="pigImg"
                        src="../assets/onePig.png"
                        @click.once="start"
                        :data="index"
                    >
                    <span
                        class="name animated slow flash"
                        v-text="item"
                        v-if="typeof item === 'string' "
                    ></span>
                    <span class="name animated slow flash" v-if="item ===0 ">恭喜发财哦！</span>
                    <img class="pigImg" src="../assets/onePigFront.png">
                </div>
            </div>
            <audio class="oneAudio" id="oneAudio" src="../assets/one.mp3" preload="auto"></audio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            pigList: [null, null, null],
            amount: "",
            time: "",
            clickIndex: "",
            canClick: true
        };
    },
    inject: ["reload"],
    methods: {
        back() {
            all.router.push("/");
        },
        fresh() {
            this.reload();
            // window.location.href = location.href;
        },
        prizes() {
            all.router.push("/prize");
        },
        start(e) {
            // if (!this.canClick) return;
            // this.canClick = false;
            let that = this;
            all.$(e.target)
                .parent()
                .addClass("click")
                .removeClass("zoomIn");
            setTimeout(() => {
                all.$(e.target)
                    .parent()
                    .addClass("shake");
                let clickIndex = parseInt(all.$(e.target).attr("data"));
                that.list = all.tool.getLocal("list");
                that.time = all.tool.getLocal("oneTime");
                if (that.time > 3) {
                    that.pigList.splice(clickIndex, 1, 0);
                    return;
                }

                all.tool.setLocal("oneTime", ++that.time);
                let index = Math.floor(Math.random() * that.list.length);
                that.pigList.splice(clickIndex, 1, that.list[index]);
                // that.pigList[clickIndex] = that.list[index];
                all.tool.savePaizeList("one", that.pigList[clickIndex], 10000);
                all.tool.delKey(that.list.slice(0), that.pigList[clickIndex]);
                all.tool.playAudio("oneAudio");
            }, 1000);
        }
    },
    mounted() {
        this.list = all.tool.getLocal("list");
        this.time = all.tool.getLocal("oneTime");
        all.tool.setLocal("stage", "one");
        console.log(this.time);
        console.log(this.list);
    }
};
</script>

<style scoped>
.one {
    background: url("../assets/bg.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    min-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top {
    position: absolute;
    top: 0;
    width: 1563px;
    height: auto;
}
.light {
    position: absolute;
    left: 0;
    top: 0;
    width: 311px;
    height: auto;
}
.lightA {
    position: absolute;
    right: 0;
    top: 0;
    width: 339px;
    height: auto;
}
.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
}
.contentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    height: 66px;
    width: auto;
    margin-bottom: 80px;
}
.gameBar {
    height: 500px;
    width: 1600px;
    padding: 0 100px;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    justify-content: center;
}
.pigBar {
    position: relative;
    width: 200px;
    height: 200px;
}
.pigImg {
    width: 200px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s;
}
.pigImg:first-child {
    z-index: 1;
    backface-visibility: hidden;
    margin-top: 40px;
}
.pigImg:last-child {
    transform: rotateY(180deg);
    backface-visibility: hidden;
    width: 220px;
}
.pigBar.click img {
    transform: rotateY(180deg);
}
.pigBar.click img:last-child {
    transform: rotateY(0deg);
    left: -20px;
}
.name {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    writing-mode: tb-rl;
    font-size: 24px;
    left: -5px;
    top: 15px;
    color: #791f16;
    height: 150px;
    width: 60px;
    transform: rotateZ(1deg);
}
.delay1 {
    animation-delay: 100ms !important;
}
.delay2 {
    animation-delay: 200ms !important;
}
.delay3 {
    animation-delay: 300ms !important;
}
.delay4 {
    animation-delay: 400ms !important;
}
.delay5 {
    animation-delay: 500ms !important;
}
.delay6 {
    animation-delay: 600ms !important;
}
.delay7 {
    animation-delay: 700ms !important;
}
.delay8 {
    animation-delay: 800ms !important;
}
.delay9 {
    animation-delay: 900ms !important;
}
.delay10 {
    animation-delay: 1000ms !important;
}
.delay11 {
    animation-delay: 1100ms !important;
}
.delay12 {
    animation-delay: 1200ms !important;
}
.delay13 {
    animation-delay: 1300ms !important;
}
.delay14 {
    animation-delay: 1400ms !important;
}
.delay15 {
    animation-delay: 1500ms !important;
}
</style>