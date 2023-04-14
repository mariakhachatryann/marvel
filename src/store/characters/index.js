import { public_key, secret_key } from "../../marvel.js"
const md5 = require('md5');

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
            console.log(payload);
        },
        select(state, payload) {
            state.selectedChar = payload
        }
    },
    actions: {
        async loadChars(context) {
            const timestamp = Date.now();
            const hash = md5(`${timestamp}${secret_key}${public_key}`);
            const offset = Math.ceil(Math.random() * 2000);
            const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${public_key}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=9`);
            const responseData = await response.json();

            responseData.data.results.forEach(character => {
                context.commit("loadChars", character)
            })
        },
        async addRandomCharacter(context) {
            const timestamp = Date.now();
            const hash = md5(`${timestamp}${secret_key}${public_key}`);
            const minId = 1;
            const maxId = 1800;
            const totalCharacters = maxId - minId + 1;
            const offset = Math.floor(Math.random() * totalCharacters);
            await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${public_key}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=1`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit("addRandomCharacter", response.data.results[0])
                })
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