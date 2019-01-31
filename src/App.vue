<template>
    <div id="app">
        <router-view id="viewRouter" class="animated fadeIn faster"/>
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {}
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
