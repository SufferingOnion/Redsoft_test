<template>
  <nav class="menu">
    <a class="menu__logo" href="#"><img src="../assets/icons/logo-museum.png" alt="museum's logo" /></a>
    <a href="#">Каталог</a>
    <a href="#">Доставка</a>
    <a href="#">Оплата</a>
    <a href="#">Контакты</a>
    <a href="#">О галерее</a>
  </nav>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss">
.menu {
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-decoration: none;
  }
}
</style>
