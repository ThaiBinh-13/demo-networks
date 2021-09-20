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
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  background: #f7f7f7;
}
</style>
