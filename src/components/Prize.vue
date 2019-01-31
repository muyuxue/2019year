P<template>
    <div class="prize">
        <img class="top animated fadeInDown" src="../assets/threeTop.png" @click="back">
        <img class="light animated fadeInLeft" src="../assets/threeLight.png">
        <img class="lightA animated fadeInRight" src="../assets/threeLightA.png">
        <img class="bottom animated fadeInUp" src="../assets/threeBottom.png">
        <div class="contentBox">
            <img
                v-if="stage.length>0"
                class="title animated rubberBand"
                @click="next"
                :src=" require(`../assets/btn${this.stage
            .charAt(0)
            .toUpperCase() + this.stage.slice(1)}.png`)"
            >
            <div class="prizes contentBox">
                <div class="list row" v-for="(item , index) in prizes" :key="item.name+index">
                    <span>恭喜：</span>
                    <div class="name row">
                        <img
                            v-for="(bit , bitI) in item.name"
                            :key="item.name+bit+bitI+index"
                            :src="require('../assets/'+(bitI>0?bit+'_0':bit)+'.png')"
                            alt
                        >
                    </div>
                    <span>获得：
                        <br>
                    </span>
                    <div class="userPrize row">
                        <img
                            v-for="(bitP , bitPI) in item.prize"
                            :key="item.prize+bitP+bitPI+index"
                            :src="require('../assets/'+(parseInt(item.prize)>0? bitP:(bitPI>0?bitP+'_0':bitP.toUpperCase()))+'.png')"
                            alt
                        >
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
            all.router.go(-1);
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
    height: 66px;
    width: auto;
    margin-bottom: 80px;
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
    align-items: flex-start;
    overflow-y: scroll;
}
.prizes img {
    height: 0.5rem;
}
.list {
    margin-top: 0.2rem;
    /* height: 0.5rem; */
    flex-shrink: 0;
}
</style>