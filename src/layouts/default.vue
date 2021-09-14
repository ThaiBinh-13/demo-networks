<script lang="ts">
import { defineComponent } from 'vue';
import { MAIN_STYLE } from '@/configs';

export default defineComponent({
  setup() {
    return {
      MAIN_STYLE,
    };
  },
});
</script>

<template>
  <div class="min-h-screen app-container">
    <DefaultHeader />
    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  background: #f7f7f7;
}
</style>
