<template>
  <div class="card">
    <div class="card__header">
      <div class="card__header--name">
        {{ title }}
      </div>
    </div>
    <div class="card__author" v-if="author === null">Автор: Аноним</div>
    <div class="card__author" v-else>Автор: {{ author }}</div>
    <div class="card__date"><span>{{formatDate(date)}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'HelloCurrency',
  props: ['title', 'author', 'date'],
  data() {
    return {
      newDate: this.date
    }
  },
  methods: {
    twoDigits (num) {
      if (num < 10) {
      return ('0' + num).slice(-2);
      } else {
      return num
      }
    },
    formatDate () {
      const d = new Date(this.newDate)
      const hours = this.twoDigits(d.getUTCHours())
      const minutes = this.twoDigits(d.getUTCMinutes())
      const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
      const date = this.twoDigits(d.getDate())
      const month = this.twoDigits(months[d.getMonth()])
      const year = d.getFullYear()
      return `${hours}:${minutes} ${date} ${month} ${year}`
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    background-color: #42bdb5;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    &__header {
      display: flex;
      margin-bottom: 5px;
      &--name {
        margin-right: 10px;
      }
    }
    &__author {
      margin-bottom: 5px;
    }
  }
  .card:hover {
      background-color: #71c0bb;
    }
  span {
    font-size: 12px;
    color: #525252;
  }
</style>
