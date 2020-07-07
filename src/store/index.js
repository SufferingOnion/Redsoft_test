import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [
      {
        name: "«Рождение Венеры»",
        url: "/Redsoft_test/img/Venera's_burth.png",
        author: "Сандро Боттичелли",
        last_cost: "2 000 000 $",
        cost: "1 000 000 $",
        sold: false,
        purchased: false,
      },
      {
        name: "«Тайная вечеря»",
        url: "/Redsoft_test/img/Last_supper.png",
        author: "Леонардо да Винчи",
        last_cost: "0",
        cost: "3 000 000 $",
        sold: false,
        purchased: false,
      },
      {
        name: "«Сотворение Адама»",
        url: "/Redsoft_test/img/Adam's _creations.png",
        author: "Микеланджело",
        last_cost: "6 000 000 $",
        cost: "5 000 000 $",
        sold: false,
        purchased: false,
      },
      {
        name: "«Урок анатомии»",
        url: "/Redsoft_test/img/Anatomy_lesson.png",
        author: "Рембрандт",
        last_cost: "0",
        cost: "0",
        sold: true,
        purchased: false,
      }
    ]
  },
  mutations: {
  },
  getters: {
    get_pictures: (state) => {
      return state.pictures
    }
  },
  actions: {
    
  },
  modules: {
  }
})
