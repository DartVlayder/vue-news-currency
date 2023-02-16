<template>
    <header class="header">
      <slot name="refresh"></slot>
      <slot name="back"></slot>
      <nav>
        <router-link to="/">Домашняя страница</router-link> |
        <router-link to="/CurrencyView">Курсы валют</router-link>
      </nav>
    </header>
</template>
<style lang="scss">
  .header {
    height: 35px;
    padding: 10px;
    background-color: #42bd77;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px 0 20px;
  }
  .refresh {
    width: 20px;
    cursor: pointer;
  }
  .refresh__img {
    width: 20px;
  }
</style>