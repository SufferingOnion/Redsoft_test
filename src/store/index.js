import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SyncState = (store) => {
  if (sessionStorage.getItem("pictures") == null) {
    store.dispatch("GetPictures")
  } else {
    console.log(JSON.parse(sessionStorage.getItem("pictures")))
    store.commit("GET_PICTURES", JSON.parse(sessionStorage.getItem("pictures")))
  }
  store.subscribe(mutation => {
    if (mutation.type === 'PURCHASE') {
      sessionStorage.setItem("pictures", JSON.stringify(store.state.pictures));
    }
    if (mutation.type === 'GET_PICTURES') {
      sessionStorage.setItem("pictures", JSON.stringify(store.state.pictures));

    }
  });
}


export default new Vuex.Store({
  state: {
    pictures: [],
  },
  mutations: {
    PURCHASE: (state, payload) => {
      state.pictures[payload.id - 1].purchased = payload.status

    },
    GET_PICTURES: (state, payload) => {
      payload.forEach(pic => {
        state.pictures.push(pic)
      });
    }
  },
  getters: {
    get_pictures: (state) => {
      return state.pictures
    }
  },
  actions: {
    BuyPicture: (context, payload) => {
      fetch("https://reqres.in/api/products/3", {
        method: 'GET',
        cache: "no-store",
      })
        .then(response => {
          context.commit("PURCHASE", {
            status: response.ok,
            id: payload.id,
          })
        })
    },
    GetPictures: (context) => {
      fetch("/Redsoft_test/pictures.json", {
        method: 'GET',
      })
        .then(response => response.json())
        .then(response => {
          context.commit("GET_PICTURES", response)
        })
    }
  },
  plugins: [SyncState]
})

