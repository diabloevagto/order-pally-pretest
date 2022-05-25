<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import store from "@/store";

export default {
  provide() {
    return store;
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background: #e5e5e5;

  --primary-color: #8dc8ff;
  --border-radius: 4px;
}
</style>
