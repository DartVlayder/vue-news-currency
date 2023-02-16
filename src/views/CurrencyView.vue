<template>
  <TheNavbar>
    <template v-slot:back>
      <div class="back" @click="back">
        <img src="../img/back.svg" alt="Назад">
      </div>
    </template>
  </TheNavbar>
  <div class="container">
    <div class="header__date">
        {{ dateBuilder(this.val.Date) }}
    </div>
    <div class="course">
      <div class="card">
          <div class="card__header">
            <div class="card__header--CharCode mb-5">
                {{ val.Valute?.USD.CharCode }}
            </div>
            <div class="card__header--name mb-5">
                {{ val.Valute?.USD.Name }}
            </div>
          </div>
          <div class="card__value">
            {{ val.Valute?.USD.Value.toFixed(2) }} 
          </div>
      </div>
      <div class="card">
          <div class="card__header">
            <div class="card__header--CharCode mb-5">
                {{ val.Valute?.EUR.CharCode }}
            </div>
            <div class="card__header--name mb-5">
                {{ val.Valute?.EUR.Name }}
            </div>
          </div>
          <div class="card__value">
            {{ val.Valute?.EUR.Value.toFixed(2) }} 
          </div>
      </div>
      <div class="card">
          <div class="card__header">
            <div class="card__header--CharCode mb-5">
                {{ val.Valute?.CNY.CharCode }}
            </div>
            <div class="card__header--name mb-5">
                {{ val.Valute?.CNY.Name }}
            </div>
          </div>
          <div class="card__value">
            {{ val.Valute?.CNY.Value.toFixed(2) }} 
          </div>
      </div>
      <div class="card">
          <div class="card__header">
            <div class="card__header--CharCode mb-5">
                {{ val.Valute?.GBP.CharCode }}
            </div>
            <div class="card__header--name mb-5">
                {{ val.Valute?.GBP.Name }}
            </div>
          </div>
          <div class="card__value">
            {{ val.Valute?.GBP.Value.toFixed(2) }} 
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import { useRouter } from 'vue-router'
export default {
  components: {TheNavbar},
  data() {
    return {
      router: useRouter(),
      val: []
    }
  },
  methods: {
    back () {
      this.router.push(`/`)
    },
    serverNews () {
      this.isLoad = true
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setResult(data)
      });
    },
    setResult (data) {
      this.val = data
      console.log(this.val);
    },
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
  },
  mounted () {
    this.serverNews()
  }
}
</script>

<style lang="scss" scoped>
.back {
  cursor: pointer;
}
.header__date {
  font-size: 20px;
  margin-bottom: 5px;
}
.course {
  display: flex;
}
.card {
  background-color: #42bd77;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 130px;
  margin-right: 10px;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.mb-5 {
  margin-bottom: 5px;
}
</style>