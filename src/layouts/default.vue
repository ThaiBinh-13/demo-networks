<script lang="ts">
import { defineComponent, computed } from 'vue';
import { MAIN_STYLE } from '@/configs';
import { initProvider, api } from '@/hooks';

export default defineComponent({
  setup() {
    initProvider();
    const isApiReady = computed(() => {
      return api.isReady;
    });
    return {
      MAIN_STYLE,
      isApiReady,
    };
  },
});
</script>

<template>
  <div class="min-h-screen app-container">
    <DefaultHeader />
    <main v-if="isApiReady" class="w-full">
      <RouterView />
    </main>
    <main v-else class="w-full h-96 flex items-center justify-center">
      <div class="loader"></div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  background: #f7f7f7;
}
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
