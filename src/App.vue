<template>
    <div id="app">
        <router-view v-if="isR" id="viewRouter" class="animated fadeIn faster"/>

        <audio class="success" src="./assets/bg1.mp3" autoplay loop></audio>
    </div>
</template>

<script>
export default {
    name: "App",
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isR: true
        };
    },
    methods: {
        reload() {
            this.isR = false;
            this.$nextTick(() => {
                this.isR = true;
            });
        }
    }
};
</script>

<style>
#app {
}
#viewRouter {
    width: 100%;
    height: 100%;
}
</style>
