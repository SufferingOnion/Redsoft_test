<template>
  <div class="header">
    <div class="header__container">
      <Menu></Menu>
      <form class="search">
        <input placeholder="Поиск по названию картины" class="search__field" type="text" name id />
        <button class="search__button button">Найти</button>
      </form>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Header",
  components: {
    Menu
  }
};
</script>

<style scoped lang="scss">
/deep/ * {
  color: #343030;
}
.header {
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  &__container {
    min-width: 1200px;
    max-width: 63.333%;
    margin: 0 auto;
    box-sizing: content-box;
    height: 3.428em;
    width: 100%;
    padding: 25px 0;
    font-size: 14px;
    line-height: 150%;
    background: transparent;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    .search {
      width: 34.12%;
      padding: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: stretch;
      &__field {
        font: normal 1em "Merriweather";
        padding: 0;
        font-size: inherit;
        flex-grow: 1;
        border: #e1e1e1 1px;
        padding-top: 13px;
        padding-bottom: 14px;
        padding-left: 16px;
        border-style: solid none solid solid;
        color: #343030;
        &:focus {
          outline: none;
          border: #b5b5b5 1px;
          border-style: solid none solid solid;
        }
        &::placeholder {
          font: inherit;
          color: #9f9f9f;
        }
      }
      &__button {
        font-size: inherit;
        flex-basis: 29.32%;
        border: 0;
      }
    }
  }
}
</style>
