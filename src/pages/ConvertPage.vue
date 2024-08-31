<script setup lang="ts">
import { ref } from 'vue';

import { useCurrencyStore } from '~/stores/currency';
const currencyStore = useCurrencyStore();

const selectFirstValue = ref('rub');
const selectSecondValue = ref('usd');

const inputFirstValue = ref<number>(0);
const inputSecondValue = ref<number>(0);

const changeFirstInput = () => {
  inputSecondValue.value = +(
    inputFirstValue.value *
    currencyStore.currencies[selectFirstValue.value][selectSecondValue.value]
  ).toFixed(2);
};

const changeSecondInput = () => {
  inputFirstValue.value = +(
    inputSecondValue.value *
    currencyStore.currencies[selectSecondValue.value][selectFirstValue.value]
  ).toFixed(2);
};
</script>
<template>
  <section class="convert">
    <div class="container">
      <h2 class="convert__title">Конвертация валют</h2>
      <form class="convert__form">
        <label class="convert__label">
          <input
            v-model="inputFirstValue"
            type="number"
            class="convert__input"
            @input="changeFirstInput"
          />
          <select v-model="selectFirstValue" class="convert__select" @change="changeSecondInput">
            <option
              v-for="item in currencyStore.currencySelect"
              :key="item"
              :value="item"
              :disabled="item === selectSecondValue"
            >
              {{ item.toUpperCase() }}
            </option>
          </select>
        </label>
        <label class="convert__label">
          <input
            v-model="inputSecondValue"
            type="number"
            class="convert__input"
            @input="changeSecondInput"
          />
          <select v-model="selectSecondValue" class="convert__select" @change="changeFirstInput">
            <option
              v-for="item in currencyStore.currencySelect"
              :key="item"
              :value="item"
              :disabled="item === selectFirstValue"
            >
              {{ item.toUpperCase() }}
            </option>
          </select>
        </label>
      </form>
    </div>
  </section>
</template>

<style scoped>
.convert {
  padding: 50px 0;
}
.convert__title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}
.convert__form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
}
.convert__label {
  max-width: 320px;
  width: 100%;
  position: relative;
}
.convert__input {
  width: 100%;
  border: 1px solid var(--gray-color);
  padding: 15px;
  font-size: 20px;
  border-radius: 15px;
}
.convert__select {
  background: #ececec;
  position: absolute;
  right: 5px;
  top: 5px;
  bottom: 5px;
  border-radius: 15px;
  padding: 0 10px;
}
</style>
