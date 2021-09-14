<script lang="ts">
/* eslint-disable @intlify/vue-i18n/no-dynamic-keys */
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="aside-item">
    <span class="text-sm">{{ $t(`SIDEBAR.${title}`) }}</span>
  </div>
</template>
