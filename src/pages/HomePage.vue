<script setup lang="ts">
import { computed } from 'vue';
import { useCurrencyStore } from 'stores/currency';

const currencyStore = useCurrencyStore();

const currentCurrency = computed(() => {
  return currencyStore.currencies[currencyStore.mainCurrency];
});
</script>

<template>
  <section class="home">
    <div class="container">
      <div class="home__inner">
        <h2 class="home__title">Текущий курс</h2>
        <ul v-if="currentCurrency" class="home__hero">
          <li v-for="(currency, key) in currentCurrency" :key="currency" class="home__hero-item">
            1 {{ key.toString().toUpperCase() }} = {{ (1 / currency).toFixed(2) }}
            {{ currencyStore.mainCurrency.toString().toUpperCase() }}
          </li>
        </ul>
        <p v-else style="font-size: 20px; text-align: center">Данных нет</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 50px 0;
}

.home__title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}
.home__hero {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.home__hero-item {
  font-size: 20px;
}
</style>
