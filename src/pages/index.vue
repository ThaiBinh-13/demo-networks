<script lang="ts">
import { defineComponent, computed } from 'vue';
import { tokenAccountsDataMap, account, stakeInfos } from '@/hooks';
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
      stakeInfos,
    };
  },
});
</script>

<template>
  <div class="fluid">
    <div class="balances">
      <div class="title">Account balances</div>
      <div v-if="account" class="items">
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
      <div clas="mt-4">
        Get stake info of HYf79FVs4xqUAgDDX5PgecTyToXk858UDSJTExR9J94o on
        Raydium
      </div>
      <div class="items">
        <div
          v-for="info in stakeInfos"
          :key="info.stakeAccountAddress"
          class="item"
        >
          <div>
            <span class="mr-1">Stake account address:</span>
            <span>
              <a
                target="_blank"
                class="text-blue-400"
                href="https://solscan.io/account/GM5hvzwumBAzdJt7VXYKopjH6E1PAWKf1kyohE84QedP"
              >
                {{ middleEllipsis(info.stakeAccountAddress) }}
              </a>
            </span>
          </div>
          <div class="text-right">
            <div>
              <span class="mr-1">Staked:</span>
              <span>{{ info.depositBalance }} RAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balances {
  @apply mt-8;
}
.items {
  @apply mt-2;
  .item {
    @apply rounded-md p-4 mb-3;
    @apply shadow-md;
    @apply bg-white;
    @apply flex items-center justify-between;
  }
}
.title {
  @apply text-2xl font-bold;
}
</style>
