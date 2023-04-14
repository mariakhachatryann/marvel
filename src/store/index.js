import { createStore } from "vuex";
import characters from "./characters/index.js";

const store = createStore({
    modules: {
        characters
    }
})

export default store;