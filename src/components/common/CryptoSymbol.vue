<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  props: {
    asset: {
      type: String,
      default: 'BNB',
    },
  },
  setup(props) {
    const image = ref<HTMLImageElement>();
    const url = ref<string>(`/img/app/crypto/${props.asset.toLowerCase()}.png`);
    onMounted(() => {
      if (image.value) {
        image.value.onerror = () => {
          url.value = `/img/app/crypto/fallback.svg`;
        };
      }
    });
    return {
      image,
      url,
    };
  },
});
</script>

<template>
  <div>
    <img ref="image" class="crypto-icon" :src="url" />
  </div>
</template>
