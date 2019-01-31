<template>
    <div class="else">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png" @click="prizes">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="contentBox">
            <img class="title animated rubberBand" src="../assets/btnElse.png" @click="fresh">
            <div class="gameBar">
                <img src="../assets/bg_light-1.png" class="stageLight stageLight1">
                <img src="../assets/bg-light-2.png" class="stageLight" :class="stageLight2">
                <!-- 舞台 -->
                <div class="stage">
                    <img src="../assets/stage.png" class="stageImg">
                </div>
                <!-- 蛋 -->
                <img
                    class="egg"
                    :class="[isHammer?'':'eggRotate' ,name&&name.length>0?'hide':'' ]"
                    src="../assets/egg.png"
                    @click.once="startCallback"
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            list: [],
            amount: "",
            isHammer: false, //是否砸金蛋
            stageLight2: ""
        };
    },
    methods: {
        back() {
            all.router.push("/");
        },
        fresh() {
            window.location.href = location.href;
        },
        prizes() {
            all.router.push("/prize");
        },
        startCallback() {
            if (this.list.length == 0) return;
            this.isHammer = true;
            let index = Math.floor(Math.random() * this.list.length);
            setTimeout(() => {
                this.name = this.list[index];
                all.tool.savePaizeList("else", this.name, "especially");

                all.tool.delKey(this.list, this.name, "elseList");
            }, 1000);
            this.amount = Math.floor(Math.random() * 6 + 10) * 100;
            console.log(this.list[index]);
            this.hammerEggAni = "hammerEggAni";
        }
    },
    mounted() {
        this.list = all.tool.getLocal("elseList");
        all.tool.setLocal("stage", "else");
        console.log(this.list);
        setTimeout(() => {
            this.stageLight2 = "stageLight2";
        }, 2000);
    }
};
</script>

<style scoped>
@import "../css/else.css";
</style>