import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  list: [
    "Tony",
    "Aimee",
    "Kevin",
    "Nick",
    "Anson",
    "Anger",
    "Andy",
    "Momo",
    "Linda",
    "Along",
    "Kent",
    "Jerry",
    "Alan",
    "Ailee",
    "Tryion",
    "Bella",
    "May",
    "Aaron",
    "Bobby",
    "Luke",
    "Jake",
    "Louis",
    "Geoff",
    "Rick",
    "Joker",
    "Leo",
    "Joe",
    "King",
    "James",
    "Sunny",
    "Taylor",
    "Eric",
    "Claire",
    "Daniel"
  ],
  img:
};
const mutations = {};
for (let item in state) {
  mutations[item] = (state, value) => {
    state[item] = value;
  };
}
export default new Vuex.Store({
  state,
  mutations
});