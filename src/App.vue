<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <h1>Картины эпохи Возрождения</h1>
      <div class="wrapper__pictures-list pictures-list">
        <PictureCard
          class="pictures-list__card"
          v-for="(picture, index) in pictures"
          :key="index"
          :picture="picture"
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PictureCard from "./components/PictureCard.vue";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    pictures() {
      return this.$store.getters.get_pictures;
    }
  },
  components: {
    PictureCard,
    Header,
    Footer
  }
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: #efeeed;
}
#app {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}

.button {
  background: #403432;
  color: #F4F6F9;
  cursor: pointer;
  &:hover {
    background: #776763;
  }
}
h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: #343030;
}
.wrapper {
  min-width: 1200px;
  max-width: 63.333%;
  margin: 0 auto;

  .pictures-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    &__card {
      flex-basis: 23.026%;
    }
  }
}
</style>
