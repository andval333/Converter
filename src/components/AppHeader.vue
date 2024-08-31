<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { useCurrencyStore } from '~/stores/currency';

const currencyStore = useCurrencyStore();

const headerNav = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Конвертация',
    path: '/convert',
  },
];
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li v-for="item in headerNav" :key="item.name" class="header__nav-item">
              <router-link :to="item.path" class="header__nav-link">{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="header__currency">
          <p class="header__currency-text">Выберите основную валюту</p>
          <select v-model="currencyStore.mainCurrency" class="header__select">
            <option v-for="item in currencyStore.currencySelect" :key="item" :value="item">
              {{ item.toUpperCase() }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 15px 0;
  border-bottom: 1px solid var(--gray-color);
  border-radius: 0 0 15px 15px;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__nav-list {
  display: flex;
  align-items: center;
  gap: 15px;
}
.router-link-exact-active {
  color: rgb(90, 90, 255);
}
.header__currency {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.header__select {
  padding: 10px;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
}
</style>
