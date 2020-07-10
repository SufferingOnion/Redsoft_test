<template>
  <div class="picture" :style="SoldOut">
    <img class="picture__img" :src="picture.url" :alt="picture.name" />
    <div class="picture__details details">
      <h2 class="details__name">{{ picture.name }}</h2>
      <h2 class="details__author">{{ picture.author }}</h2>
    </div>
    <div v-if="!picture.sold" class="picture__cost">
      <div v-if="picture.cost !=0" class="cost">
        <h3 class="cost__last" v-if="picture.last_cost !=0">{{ picture.last_cost }}</h3>
        <h3 class="cost__current">{{ picture.cost }}</h3>
      </div>
      <transition-group name="button" tag="div" class="cost__button">
        <div
          v-if="this.purchaseRequest == false&&this.picture.purchased != true"
          @click="BuyPicture"
          key="buy"
          class="button"
        >Купить</div>
        <div
          v-if="this.picture.purchased == true"
          key="purchased"
          class="button button__purchased"
        >В корзине!</div>
        <div
          v-show="this.purchaseRequest == true&&this.picture.purchased != true"
          key="loading"
          class="button__loader"
        >
          <img src="../assets/icons/loader.svg" />
          <img src="../assets/icons/loader.svg" />
        </div>
      </transition-group>
    </div>
    <div v-else class="picture__soldOut">
      <span>Продана на аукционе</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    picture: Object
  },
  data() {
    return {
      purchaseRequest: false
    };
  },
  computed: {
    SoldOut() {
      if (this.picture.sold) {
        return { opacity: ".5" };
      } else {
        return { opacity: "1" };
      }
    }
  },
  methods: {
    BuyPicture() {
      this.purchaseRequest = true;
      this.$store.dispatch("BuyPicture", { id: this.picture.id });
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
        position: relative;
        overflow: hidden;
        height: 3.428em;
        width: 52.21%;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
        .button {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          &__purchased {
            cursor: auto;
            &:hover {
              background: #403432;
            }
          }
          &__loader {
            background-color: transparent;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              position: absolute;
              &:first-child {
                animation: Loader 1s ease infinite;
              }
              &:last-child {
                animation: Loader 1s cubic-bezier(0.22, 0.67, 0.85, 0.35)
                  infinite;
              }
            }
          }
        }
      }
    }
  }
  &__soldOut {
    padding-left: 24px;
    padding-right: 36px;
    padding-bottom: 22px;
    margin: auto 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      color: #343030;
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
    width: 100%;
    &__name,
    &__author {
      margin: 0;
      font-size: 18px;
      line-height: 150%;
      color: #343030;
    }
  }
}
.button-enter-active,
.button-leave-active {
  position: absolute;
  top:0;
  transition: all 0.2s ease-in-out;
}
.button-enter {
  left: 0;
  transform: translateX(-100%);
  opacity: 0;
}
.button-leave-to {
  left: 0;
  transform: translateX(100%);
  opacity: 0;
}
@keyframes Loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
