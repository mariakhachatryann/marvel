import { createStore } from "vuex";
import characters from "./characters/index.js";

const store = createStore({
    modules: {
        characters
    },
    state() {
        return {
            age: 17
        }
    }
})

export default store;