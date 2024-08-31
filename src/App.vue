<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
import { RouterView } from 'vue-router';
import AppLayout from 'layouts/AppLayout.vue';

import { useCurrencyStore } from '~/stores/currency';

const currencyStore = useCurrencyStore();

const getCurrencies = async () => {
  try {
    const { data } = await axios.get('https://status.neuralgeneration.com/api/currency');
    console.log(data);

    currencyStore.setCurrencies(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

onMounted(async () => {
  await getCurrencies();
});
</script>

<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<style scoped></style>
