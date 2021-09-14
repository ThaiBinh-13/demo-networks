<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent } from 'vue';
import { FOOTER_STYLE } from '@/configs';

export default defineComponent({
  setup() {
    const buildDate = dayjs(document.documentElement.dataset.build).format(
      'MMMM D, YYYY h:mm A',
    );
    return { FOOTER_STYLE, buildDate };
  },
});
</script>

<template>
  <el-footer height="auto" :style="FOOTER_STYLE">
    <div class="text-xs text-right">
      <span>{{ buildDate }}</span>
    </div>
  </el-footer>
</template>
