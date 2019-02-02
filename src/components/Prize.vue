P<template>
    <div class="prize">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="contentBox">
            <div class="prizeTitle animated rubberBand" @click="next">
                <img
                    v-if="stage.length>0"
                    class="title"
                    :src=" require(`../assets/btn${this.stage
            .charAt(0)
            .toUpperCase() + this.stage.slice(1)}.png`)"
                >
                <img src="../assets/prize_title.png" class="title">
            </div>

            <div class="prizes contentBox wrap">
                <div class="list row" v-for="(item , index) in prizes" :key="item.name+index">
                    <img src="../assets/prize_text.png">
                    <div class="name row">
                        <img
                            v-for="(bit , bitI) in item.name"
                            :key="item.name+bit+bitI+index"
                            :src="require('../assets/'+(bitI>0?bit+'_0':bit)+'.png')"
                            alt
                        >
                    </div>
                    <img src="../assets/prize_text2.png">
                    <div class="userPrize row" v-if="parseInt(item.prize)>0 ">
                        <img
                            v-for="(bitP , bitPI) in item.prize"
                            :key="item.prize+bitP+bitPI+index"
                            :src="require('../assets/'+ bitP+'.png')"
                            alt
                        >
                    </div>
                    <div class="userPrizeText" v-else>
                        <span>{{item.prize}}</span>
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
            prizes: [],
            stage: "",
            pageIndex: 0,
            games: ["/", "/three", "/second", "/one", "/else"]
        };
    },
    methods: {
        back() {
            all.router.push("/");
        },
        next() {
            // window.location.href = location.href;
            all.router.push(
                this.games[(this.pageIndex + 1) % this.games.length]
            );
        }
    },
    mounted() {
        this.stage = all.tool.getLocal("stage") || this.games[0];
        this.pageIndex = this.games.indexOf("/" + this.stage);
        let list = all.tool.getLocal("prizeList");
        if (!list) return;
        if (list[this.stage]) this.prizes = list[this.stage].slice(0);
        console.log(this.prizes, list);
    }
};
</script>

<style scoped>
.prize {
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
    height: 0.8rem;
    width: auto;
    margin-bottom: 20px;
}
.over {
    width: 1200px;
    height: 500px;
}
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.wrap {
    flex-wrap: wrap;
}
.prizes {
    font-size: 0.5rem;
    -webkit-box-align: start;
    max-height: 6rem;
    -ms-flex-align: start;
    width: 14rem;
    align-items: center;
    /* overflow-y: scroll; */
}
.prizes img {
    height: 0.5rem;
}
.list {
    margin-top: 0.2rem;
    /* height: 0.5rem; */
    -ms-flex-negative: 0;
    flex-shrink: 0;
    align-items: start;
    justify-content: start;
    width: 50%;
    height: 0.5rem;
}
.name img {
    height: 0.6rem;
}
.userPrize img {
    height: 0.4rem;
    margin-top: 0.1rem;
}
.userPrizeText {
    font-size: 0.5rem;
    color: #fff4c1;
}
.list > img {
    margin: 0 0.3rem;
}
</style>