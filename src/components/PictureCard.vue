<template>
  <div class="picture" :style="SoldOut">
    <img class="picture__img" :src="picture.url" :alt="picture.name" />
    <div class="picture__details details">
      <h2 class="details__name">{{ picture.name }}</h2>
      <h2 class="details__author">{{ picture.author }}</h2>
    </div>
    <div class="picture__cost">
      <div v-if="picture.cost !=0" class="cost">
        <h3 class="cost__last" v-if="picture.last_cost !=0">{{ picture.last_cost }}</h3>
        <h3 class="cost__current">{{ picture.cost }}</h3>
      </div>
      <div class="cost__button button" @click="BuyPicture">Купить</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    picture: Object
  },
  computed: {
    SoldOut(){
      if (this.picture.sold){
        return {opacity: ".5"}
      } else {
        return {opacity: "1"}
      }
    }
  },
  methods: {
    BuyPicture(){
      this.$store.dispatch('BuyPicture', this.picture.name)
    }
  }
};
</script>

<style scoped lang="scss">
.picture {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: #e1e1e1 solid 1px;
  &__cost {
    width: 100%;
    padding: 0 24px;
    padding-bottom: 24px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .cost {
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      white-space: nowrap;
      &__last {
        margin: 0;
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #a0a0a0;
      }
      &__current {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        color: #343030;
      }
      &__button {
        height: 3.428em;
        width: 52.21%;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &__img {
    width: 100%;
    border-bottom: #e1e1e1 solid 1px;
  }
  .details {
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 36px;
    padding-bottom: 22px;
    &__name,
    &__author {
      margin: 0;
      font-size: 18px;
      line-height: 150%;
      color: #343030;
    }
  }
}
</style>
