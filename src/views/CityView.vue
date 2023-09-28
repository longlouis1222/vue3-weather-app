<template>
  <div>
    <Suspense
      ><AsyncCityView />
      <template #fallback>
        <CityViewScheleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
import CityViewScheleton from "../components/CityViewScheleton.vue";
</script>