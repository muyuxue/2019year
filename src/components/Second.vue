<template>
    <div class="second">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png" @click="prizes">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="gameTime">本轮游戏次数：{{time}}</div>
        <audio class="secondAudio" id="secondAudio" src="../assets/second.mp3" preload="auto"></audio>
        <div class="contentBox">
            <img class="title animated rubberBand" src="../assets/btnSecond.png" @click="fresh">
            <div class="gameBar">
                <div class="amountBar animaM">
                    <div class="numberBg">
                        <span class="number numberA">
                            <img :src="numberList[indexA]">
                        </span>
                    </div>
                    <div class="numberBg">
                        <span class="number numberB">
                            <img :src="numberList[indexB]">
                        </span>
                    </div>
                    <div class="numberBg">
                        <span class="number numberC">
                            <img :src="numberList[indexC]">
                        </span>
                    </div>
                    <div class="numberBg">
                        <span class="number numberD">
                            <img :src="numberList[indexD]">
                        </span>
                    </div>
                </div>
                <div class="start">
                    <div class="numberBgName animated heartBeat infinite slow" v-if="name!=='开始'">
                        <span class="name numberA" v-for="(letter,letterI) in name" :key="letterI">
                            <img :src="require('../assets/'+letter+(letterI>0?'_0':'')+'.png')">
                        </span>
                    </div>
                    <div class="numberBgName" v-if="name==='开始'" @click="start">
                        <span class="numberA" v-text="name"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "开始",
            list: [],
            amount: "",
            time: "",
            numberList: [
                require("../assets/0.png"),
                require("../assets/1.png"),
                require("../assets/2.png"),
                require("../assets/3.png"),
                require("../assets/4.png"),
                require("../assets/5.png"),
                require("../assets/6.png"),
                require("../assets/7.png"),
                require("../assets/8.png"),
                require("../assets/9.png")
            ],
            canClick: true,
            indexA: 0,
            indexB: 0,
            indexC: 0,
            indexD: 0,
            stopA: false,
            stopB: false,
            stopC: false,
            stopD: false,
            stopName: false,
            timer: null
        };
    },
    inject: ["reload"],
    methods: {
        back() {
            all.router.push("/");
        },
        fresh() {
            // window.location.href = location.href;
            this.reload();
        },

        prizes() {
            all.router.push("/prize");
        },
        numberAnimation() {
            all.$(".amountBar")
                .removeClass("animaM")
                .addClass("animaA animaB animaC animaD");
            this.timer = setInterval(() => {
                if (!this.stopA) this.indexA = Math.floor(Math.random() * 10);
                if (!this.stopB) this.indexB = Math.floor(Math.random() * 10);
                if (!this.stopC) this.indexC = Math.floor(Math.random() * 10);
                if (!this.stopD) this.indexD = Math.floor(Math.random() * 10);
            }, 100);
            setTimeout(() => {
                this.stopA = true;
                this.indexA = parseInt(this.amount.toString()[0]);
                all.$(".amountBar").removeClass("animaA");
                let index = Math.floor(Math.random() * this.list.length);
                this.name = this.list[index];
                all.tool.setLocal("secondTime", this.time + 1);
                all.tool.delKey(this.list, this.name);
                all.tool.playAudio("secondAudio");
                all.tool.savePaizeList("second", this.name, this.amount);
                clearInterval(this.timer);
                this.timer = null;
            }, 4000);
            setTimeout(() => {
                this.stopB = true;
                this.indexB = parseInt(this.amount.toString()[1]);
                all.$(".amountBar").removeClass("animaB");
            }, 3000);
            setTimeout(() => {
                this.stopC = true;
                all.$(".amountBar").removeClass("animaC");
                this.indexC = parseInt(this.amount.toString()[2]);
            }, 2000);
            setTimeout(() => {
                this.stopD = true;
                all.$(".amountBar").removeClass("animaD");
                this.indexD = parseInt(this.amount.toString()[3]);
            }, 1000);
        },
        start(e) {
            if (!this.canClick) return;
            this.canClick = false;
            if (this.time > 10) return;

            this.amount = Math.floor(Math.random() * 11 + 20) * 100;
            this.numberAnimation();
        }
    },
    mounted() {
        this.list = all.tool.getLocal("list");
        all.tool.setLocal("stage", "second");
        this.time = all.tool.getLocal("secondTime");
        console.log(this.time);
        console.log(this.list);
    }
};
</script>

<style scoped>
.second {
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
    width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.amountBar {
    display: flex;
    overflow: hidden;
    height: 143px;
}
.numberBg {
    width: 98px;
    height: 143px;
    background: url("../assets/numberBg.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 10px;
}
.numberBgName {
    width: 452px;
    /* height: 143px; */
    /*background:url("../assets/numberBgName.png") no-repeat;
        background-size:100% 100%;*/
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    font-size: 48px;
    color: #f9ca80;
}
.name {
    display: flex;
    /* width: 40px; */
    height: 2rem;
}
.name img {
    height: 100%;
    width: auto;
}
.number {
    width: 98px;
    height: 143px;
    margin: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes numMove {
    0% {
        margin-top: -100%;
    }
    50% {
        margin-top: 0;
    }
    100% {
        margin-top: 100%;
    }
}
.animaM .numberA {
    animation: numMove 0.3s infinite linear;
}
.animaM .numberB {
    animation: numMove 0.4s infinite linear;
}
.animaM .numberC {
    animation: numMove 0.5s infinite linear;
}
.animaM .numberD {
    animation: numMove 0.6s infinite linear;
}
.animaA .numberA {
    animation: numMove 0.4s infinite linear;
}
.animaB .numberB {
    animation: numMove 0.3s infinite linear;
}
.animaC .numberC {
    animation: numMove 0.2s infinite linear;
}
.animaD .numberD {
    animation: numMove 0.1s infinite linear;
}
.gameTime {
    position: absolute;
    right: 3.5rem;
    top: 1rem;
    color: #ec844b;
    font-size: 0.5rem;
}
</style>