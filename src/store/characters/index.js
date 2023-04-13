import { public_key, secret_key } from "../../marvel.js"

export default {
    state() {
        return {
            characters: [],
            randomChar: {},
            selectedChar: null
        }
    },
    mutations: {
        loadChars(state, payload) {
            state.characters.push(payload)
        },
        addRandomCharacter(state, payload) {
            state.randomChar = payload;
        },
        select(state, payload) {
            state.selectedChar = payload
            console.log(state.selectedChar);
        }
    },
    actions: {
        async loadChars(context) {
            const offset = Math.ceil(Math.random() * 2000);
            const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${public_key}&offset=${offset}&limit=9`);
            const responseData = await response.json();

            responseData.data.results.forEach(character => {
                context.commit("loadChars", character)
            })
        },
        async addRandomCharacter(context) {
            const offset = Math.ceil(Math.random() * 1000);
            const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${public_key}&offset=${offset}&limit=1`);
            const responseData = await response.json();
            
            let char = responseData.data.results[0]
            context.commit("addRandomCharacter", char)
        }
    },
    getters: {
        characters(state) {
            return state.characters;
        },
        randomCharacter(state) {
            return state.randomChar
        },
        selectedCharacter(state) {
            return state.selectedChar
        }
    }
}