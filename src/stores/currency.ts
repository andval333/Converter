import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCurrencyStore = defineStore('currency', () => {
  const currencySelect = ['rub', 'usd', 'eur'];

  const mainCurrency = ref('rub');
  const currencies = ref<any>({});

  const setCurrencies = (data: any) => {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const [from, to] = key.split('-');
        if (
          (from !== 'rub' && from !== 'usd' && from !== 'eur') ||
          (to !== 'rub' && to !== 'usd' && to !== 'eur')
        )
          continue;

        if (!currencies.value[from]) {
          currencies.value[from] = {};
        }
        currencies.value[from][to] = data[key];
      }
    }
    
  };

  return { currencies, mainCurrency, setCurrencies, currencySelect };
});
