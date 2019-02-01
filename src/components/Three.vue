<template>
    <div class="three">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png" @click="prizes">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="gameTime">本轮游戏次数：{{time}}</div>
        <div class="contentBox">
            <img class="title animated rubberBand" src="../assets/btnThree.png" @click="fresh">
            <div class="gameBar">
                <img src="../assets/bg_light-1.png" class="stageLight stageLight1">
                <img src="../assets/bg-light-2.png" class="stageLight" :class="stageLight2">
                <!-- 舞台 -->
                <div class="stage">
                    <img src="../assets/stage.png" class="stageImg">
                </div>
                <!-- 蛋 -->
                <!-- isHammer?'':'eggRotate' -->
                <div class="eggBox" :class="['eggRotate' ,name&&name.length>0?'hide':'' ]">
                    <img class="egg" src="../assets/egg.png" @click.once="startCallback">
                    <img
                        src="../assets/egg_break.png"
                        class="eggBreak"
                        :class="[isHammer?'eggBreakAni':'']"
                    >
                </div>
                <img
                    src="../assets/coloured.png"
                    class="coloured"
                    :class="isHammer?'colouredAni':''"
                >
                <!-- 锤子 -->
                <img src="../assets/hammer.png" class="hammer" :class="isHammer?'hammerEggAni':''">
                <div class="nameBox row animated heartBeat infinite slow">
                    <img
                        v-for="(src , index) in name"
                        :key="index"
                        :src="require('../assets/'+src+(index>0?'_0':'')+'.png')"
                    >
                </div>
            </div>
            <audio class="elseAudio" id="elseAudio" src="../assets/else.mp3" preload="auto"></audio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            list: [],
            time: 0,
            amount: "",
            isHammer: false, //是否砸金蛋
            stageLight2: ""
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
        startCallback() {
            if (this.time > 15) return;
            this.isHammer = true;
            let index = Math.floor(Math.random() * this.list.length);
            setTimeout(() => {
                all.tool.setLocal("threeTime", this.time + 1);
                this.name = this.list[index];
                all.tool.savePaizeList("three", this.name, "1500");
                all.tool.delKey(this.list, this.name);
            }, 2000);
            setTimeout(() => {
                all.tool.playAudio("elseAudio");
                all.$(".egg").addClass("hide");
            }, 800);
            this.hammerEggAni = "hammerEggAni";
        }
    },
    mounted() {
        this.list = all.tool.getLocal("list");
        this.time = all.tool.getLocal("threeTime");
        all.tool.setLocal("stage", "three");

        console.log(this.list);
        setTimeout(() => {
            this.stageLight2 = "stageLight2";
        }, 2000);
    }
};
</script>

<style scoped>
.hide {
    display: none !important;
}
.three {
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
    z-index: 9;
    height: auto;
}
.light {
    position: absolute;
    left: 0;
    top: 0;
    width: 311px;
    height: auto;
    z-index: 99;
}
.lightA {
    position: absolute;
    right: 0;
    top: 0;
    width: 339px;
    height: auto;
    z-index: 99;
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
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.title {
    height: 66px;
    width: auto;
    margin-bottom: 80px;
    z-index: 9;
}
.fadeInUp {
    z-index: 3;
}
.gameBar {
    height: 500px;
    width: 1200px;
    position: relative;
}
.stage {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(50%);
}
.stageImg {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.stageLight {
    width: 100vw;
    height: 100vh;
    position: fixed;
    opacity: 1;
    top: 0;
    left: 0;
    opacity: 0;
}
.stageLight1 {
    animation: stageBgAni1 4s ease 0s infinite;
}
.stageLight2 {
    animation: stageBgAni1 4s ease 0s infinite;
}

@keyframes stageBgAni1 {
    0% {
        opacity: 0;
        /* transform: scale(0.9) rotate(15deg); */
    }

    50% {
        opacity: 0.7;
        /* transform: scale(1) rotate(-17deg); */
    }

    100% {
        opacity: 0;
        /* transform: scale(0.9) rotate(15deg); */
    }
}
.eggBox {
    position: relative;
    display: block;
    margin: 0 auto;
    position: absolute;
    z-index: 3;
    width: 3rem;
    left: 0;
    transform: rotate(0deg);
    transform-origin: 50% 100%;

    right: 0;
    bottom: 0;
}
.egg {
    width: 100%;
    height: auto;
}
.eggBreak {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    transform-origin: 80% 20%;
    transform: scale(0);
}
.eggBreakAni {
    animation: eggBreakFrames 0.5s ease 0.5s;
}
@keyframes eggBreakFrames {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0.7;
    }
}

.coloured {
    position: absolute;
    left: 50%;
    top: 0%;
    -webkit-transform-origin: 57% 19%;
    transform-origin: 57% 19%;
    -webkit-transform: translate(-50%, -5%) scale(0);
    transform: translate(-50%, -5%) scale(0);
}
.colouredAni {
    animation: colouredFrames 1s ease 1s;
}
@keyframes colouredFrames {
    0% {
        transform: translate(-50%, -5%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -5%) scale(1);
        opacity: 0;
    }
}

.nameBox {
    position: absolute;
    top: 29%;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.heartBeatNum {
    animation-iteration-count: 3;
}
.eggRotate {
    animation: eggRotateAni 3s ease-in-out 0.01s infinite;
}
@keyframes eggRotateAni {
    0% {
        transform: rotate(0deg);
    }
    5% {
        transform: rotate(-10deg);
    }
    15% {
        transform: rotate(10deg);
    }
    25% {
        transform: rotate(-7deg);
    }
    35% {
        transform: rotate(7deg);
    }
    45% {
        transform: rotate(-10deg);
    }
    55% {
        transform: rotate(10deg);
    }
    65% {
        transform: rotate(-8deg);
    }
    75% {
        transform: rotate(9deg);
    }
    85% {
        transform: rotate(-10deg);
    }
    95% {
        transform: rotate(9deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.hammer {
    position: absolute;
    top: -22%;
    left: 52%;
    transform: rotate(-16deg);
    transform-origin: 100% 100%;
    width: 3.5rem;
    opacity: 0;
}
.hammerEggAni {
    animation: hammerEggFrame 1s ease;
}
@keyframes hammerEggFrame {
    0% {
        opacity: 0.5;
        transform: scale(1) rotate(-15deg);
    }
    5% {
        opacity: 1;
    }
    25% {
        transform: scale(0.9) rotate(15deg);
    }
    50% {
        transform: scale(1) rotate(-17deg);
    }
    75% {
        transform: scale(0.9) rotate(20deg);
        opacity: 1;
    }
    90% {
        transform: scale(1) rotate(-18deg);
        /* opacity: 0; */
    }
    100% {
        opacity: 1;
        transform: scale(1) rotate(-18deg);
    }
}
.gameTime {
    position: absolute;
    right: 3.5rem;
    top: 1rem;
    color: #ec844b;
    font-size: 0.5rem;
}
</style>