<template>
  <the-navbar>
    <template v-slot:back>
      <div class="back" @click="back">
        <img src="../img/back.svg" alt="Назад">
      </div>
    </template>
  </the-navbar>
  <div class="container">
    <div class="card">
      <div class="card__img" v-if="this.doneTodosCount.urlToImage">
        <img :src="this.doneTodosCount.urlToImage">
      </div>
      <div class="card__title">
        {{this.doneTodosCount.title}}
      </div>
      <div class="card__content" v-if="this.doneTodosCount.description !== 'Подробнее на сайте'">
        {{this.doneTodosCount.description}}
      </div>
      <div class="card__date">
        {{ dateBuilder(this.doneTodosCount.publishedAt) }}
      </div>
      <div class="card__link">
        <a :href="this.doneTodosCount.url">
          Подробнее на сайте
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import TheNavbar from './TheNavbar.vue'
import { useRouter } from 'vue-router'
export default {
  components: {TheNavbar},
  data() {
    return {
      news: this.$store.getters.NEWS,
      page: this.$route.params.id,
      item: this.$store.getters.getIdNEWS(this.page),
      router: useRouter()
    }
  },
  methods: {
    dateBuilder () {
      const d = new Date()
      const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
      const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`
    },
    back () {
      this.router.push(`/`)
    }
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.getIdNEWS(this.page)
    }
  }
} 
</script>
<style lang="scss" scoped>
.back {
  cursor: pointer;
}
.card {
  &__img {
    width: 300px;
    margin-bottom: 10px;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__content {
    margin-bottom: 10px;
  }
}
</style>