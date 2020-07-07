<template>
  <div class="footer">
    <div class="footer__container">
      <Menu></Menu>
      <div class="contacts">
        <div class="contacts__item">
          <img src="../assets/icons/phone.svg" alt="contact phone" />
          <span>+7 (495) 555-55-55</span>
        </div>
        <div class="contacts__item">
          <img src="../assets/icons/adress.svg" alt="contact phone" />
          <span>г. Москва, ул. Расплетина, 24</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Footer",
  components: {
    Menu
  }
};
</script>

<style scoped lang="scss">
/deep/ * {
  color: #555555;
}
.footer {
  width: 100%;
  background: #eceaea;
  position: absolute;
  bottom: 0;
  left: 0;
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    .contacts {
      width: 36.92%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      &__item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        img {
          margin-right: 8px;
        }
        span {
          display: block;
        }
      }
    }
  }
}
</style>
