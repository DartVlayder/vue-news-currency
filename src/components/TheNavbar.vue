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
<script>
export default {
    data() {
    return {
      news: this.$store.getters.NEWS
    }
  },
  methods: {
    setResult (data) {
      localStorage.clear()
      localStorage.setItem('news', JSON.stringify(this.news))
      this.news.push(data.articles)
      console.log(this.news); 
    },
    serverNews () {
      fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=81332f1e69b94b54b43cac582b591c9e')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setResult(data)
      });
    }
  },
}
</script>
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