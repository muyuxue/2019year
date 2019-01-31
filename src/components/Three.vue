<template>
    <div class="three">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png" @click="prizes">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="contentBox">
            <img class="title animated rubberBand" src="../assets/btnThree.png" @click="fresh">
            <vue-scratch-card
                element-id="scratchWrap"
                class="over animated lightSpeedIn"
                :cover-img="this.$store.state.img"
                :ratio="0.8"
                :move-radius="60"
                :start-callback="startCallback"
                :clear-callback="clearCallback"
                cover-color="red"
            >
                <div slot="result" class="content">
                    <span v-if="time<=15">恭喜</span>
                    <span v-if="time<=15" class="name" v-text="name"></span>
                    <span v-if="time<=15">获得</span>
                    <span v-if="time<=15" class="amount" v-text="amount+'泰铢'"></span>
                    <span v-if="time>15">恭喜大家发大财哦！</span>
                </div>
            </vue-scratch-card>
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
            time: ""
        };
    },
    methods: {
        back() {
            // all.router.go(-1);
            all.router.push("/");
        },
        fresh() {
            window.location.href = location.href;
            // all.router.push("index");
        },
        prizes() {
            all.router.push("/prize");
        },
        startCallback() {
            if (this.time > 15) return;
            all.tool.setLocal("threeTime", this.time + 1);
            let index = Math.floor(Math.random() * this.list.length);
            this.name = this.list[index];
            this.amount = Math.floor(Math.random() * 6 + 10) * 100;
            all.tool.savePaizeList("three", this.name, this.amount);
            console.log(this.list[index]);
            all.tool.delKey(this.list, this.name);
        },
        clearCallback() {
            console.log("清除完毕");
        }
    },
    mounted() {
        this.list = all.tool.getLocal("list");
        this.time = all.tool.getLocal("threeTime");
        all.tool.setLocal("stage", "three");
        console.log(this.time);
        console.log(this.list);
    }
};
</script>

<style scoped>
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
.over {
    width: 1200px;
    height: 500px;
}
.content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background: url("../assets/bgB.jpg") no-repeat;
    background-size: 100% 100%;
    padding: 50px;
    font-size: 48px;
    color: red;
}
.name {
    font-size: 120px;
    color: #f8dcb0;
}
.amount {
    font-size: 120px;
    color: #f8dcb0;
}
</style>