<script lang="ts">
import { defineComponent, computed } from 'vue';
import { tokenAccountsDataMap, account } from '@/hooks';
import { middleEllipsis, toDP } from '@/utils';

export default defineComponent({
  setup() {
    const balancesList = computed(() => {
      return Array.from(tokenAccountsDataMap.values());
    });
    return {
      balancesList,
      account,
      middleEllipsis,
      toDP,
    };
  },
});
</script>

<template>
  <div class="fluid">
    <div class="balances">
      <div class="title">Account balances</div>
      <div v-if="account" class="balances__items">
        <div v-for="item in balancesList" :key="item.mintAddress" class="item">
          <div>
            <div>
              <span class="mr-1">Mint Address:</span>
              <span>
                {{ middleEllipsis(item.mintAddress) }}
              </span>
            </div>
            <div>
              <span class="mr-1">Token Account:</span>
              <span>
                {{ middleEllipsis(item.tokenAccountAddress) }}
              </span>
            </div>
          </div>
          <div class="text-right">
            <div>Balance</div>
            <div>{{ item.balance }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="methods mt-8">
      <div class="title">Example contract method</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balances {
  @apply mt-8;
  &__items {
    @apply mt-2;
    .item {
      @apply rounded-md p-4 mb-3;
      @apply shadow-md;
      @apply bg-white;
      @apply flex items-center justify-between;
    }
  }
}
.title {
  @apply text-2xl font-bold;
}
</style>
