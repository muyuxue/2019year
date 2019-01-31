import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Three from "@/components/Three";
import Second from "@/components/Second";
import One from "@/components/One";
import Else from "@/components/Else";
import Prize from "@/components/Prize";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/three", component: Three },
    { path: "/second", component: Second },
    { path: "/one", component: One },
    { path: "/else", component: Else },
    { path: "/prize", component: Prize }
  ]
});
