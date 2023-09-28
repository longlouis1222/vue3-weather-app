<template>
  <div
    class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col flex-1">
      <h2 class="text-3xl">{{ splitWithCapitalize(city.city) }}</h2>
      <h3>{{ splitWithCapitalize(city.state) }}</h3>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-3xl self-end">
        {{ Math.round(convertToDegC(city.weather.main.temp)) }}&deg;C
      </p>
      <div class="flex gap-2">
        <span class="text-xs">
          H:
          {{ Math.round(convertToDegC(city.weather.main.temp_max)) }}&deg;C
        </span>
        <span class="text-xs">
          L:
          {{ Math.round(convertToDegC(city.weather.main.temp_min)) }}&deg;C
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fnMixins } from "../mixins/fnMixins.js";

const convertToDegC = (deg) => fnMixins.convertToDegC(deg);
const splitWithCapitalize = (val) => fnMixins.splitWithCapitalize(val);

defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>