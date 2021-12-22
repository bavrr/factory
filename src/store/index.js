import { createStore } from "vuex";
import countPower from "@/helpers/countPower.js";

export const store = createStore({
  state() {},
  getters: {
    cyborgList(state) {
      return state.cyborgList || [];
    },
    averageDex(state) {
      return (
        state.cyborgList
          ?.reduce((averageDex, cyborg, index) => {
            averageDex = averageDex + cyborg.dex;
            if (index === state.cyborgList.length - 1) {
              averageDex = averageDex / (index + 1);
            }
            return averageDex;
          }, 0)
          .toFixed(2) ?? 0
      );
    },
    averageStr(state) {
      return (
        state.cyborgList
          ?.reduce((averageStr, cyborg, index) => {
            averageStr = averageStr + cyborg.str;
            if (index === state.cyborgList.length - 1) {
              averageStr = averageStr / (index + 1);
            }
            return averageStr;
          }, 0)
          .toFixed(2) ?? 0
      );
    },
    averageInt(state) {
      return (
        state.cyborgList
          ?.reduce((averageInt, cyborg, index) => {
            averageInt = averageInt + cyborg.int;
            if (index === state.cyborgList.length - 1) {
              averageInt = averageInt / (index + 1);
            }
            return averageInt;
          }, 0)
          .toFixed(2) ?? 0
      );
    },
    firstGenerationProgress(state) {
      let firstGenerationCyborgProgress = 0;
      if (state.cyborgList) {
        for (let i = state.cyborgList.length - 1; i >= 0; i--) {
          if (state.cyborgList[i].cyborgType === "firstGeneration") {
            return countPower(state.cyborgList[i]);
          }
        }
      }
      return firstGenerationCyborgProgress;
    },
    secondGenerationProgress(state) {
      let secondGenerationProgress = 0;
      if (state.cyborgList) {
        for (let i = state.cyborgList.length - 1; i >= 0; i--) {
          if (state.cyborgList[i].cyborgType === "secondGeneration") {
            return countPower(state.cyborgList[i]);
          }
        }
      }
      return secondGenerationProgress;
    },
  },
  actions: {
    getData(context) {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setState", data));
    },
    createCyborg(context, cyborg) {
      context.commit("addCyborg", cyborg);
    },
    saveData(context) {
      fetch("data.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(context.state),
      }).then((data) => console.log(data));
    },
  },
  mutations: {
    setState(state, value) {
      store.replaceState(value);
    },
    addCyborg(state, cyborg) {
      if (state.cyborgList && state.cyborgList.length) {
        let ID = 0;
        for (let i = state.cyborgList.length - 1; i >= 0; i--) {
          if (cyborg.cyborgType === state.cyborgList[i].cyborgType) {
            ID = state.cyborgList[i].id + 1;
            state.cyborgList.push(Object.assign({}, cyborg, { id: ID }));
            return;
          }
        }
        state.cyborgList.push(Object.assign({}, cyborg, { id: ID }));
        return;
      }

      state.cyborgList = [];
      state.cyborgList.push(Object.assign({}, cyborg, { id: 0 }));
      return;
    },
  },
});
