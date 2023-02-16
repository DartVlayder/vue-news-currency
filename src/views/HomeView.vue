<template>
  <the-navbar>
    <template  v-slot:refresh >
      <div class="refresh" @click="serverNews">
        <img src="../img/refresh.svg" class="refresh__img" :class="{load: isLoad}" alt="обновить">
      </div>
    </template>
  </the-navbar>
  <div class="container">
    <ul class="news__list">
      <li class="news__item" 
        v-for="(item, index) in news[0]" :key="item.id"
        @click="openItem(index)"
      >
        <HelloCurrency 
          :title=item.title
          :author=item.author
          :date=item.publishedAt
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HelloCurrency from '@/components/HelloCurrency.vue'
import {useRouter} from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloCurrency,
    TheNavbar
  },
  data() {
    return {
      news: this.$store.getters.NEWS,
      router: useRouter(),
      isLoad: false
    }
  },
  methods: {
    setResult (data) {
      this.news = []
      localStorage.clear()
      this.news.push(data.articles)
      localStorage.setItem('news', JSON.stringify(this.news))
      this.isLoad = false
    },
    serverNews () {
      this.isLoad = true
      fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=81332f1e69b94b54b43cac582b591c9e')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setResult(data)
      });
    },
    openItem (index) {
      this.router.push(`/newsPage/${index}`)
    }
  },
  mounted () {
    this.serverNews()
  }, 
}
</script>

<style>
.refresh .load {
  animation: preloader-rotate 2s infinite ease-in-out
}
@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>