<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import {
  account,
  getAccountBalance,
  accountBalance,
  sendTransaction,
  txState,
} from '@/hooks';
import { FAUCET, WALLET_EXTENSION } from '@/configs';
import { middleEllipsis } from '@/utils';

export default defineComponent({
  setup() {
    const balance = computed(() => {
      return accountBalance.value;
    });
    if (account.value.address) {
      getAccountBalance(account.value.address);
    }

    return {
      balance,
      account,
      FAUCET,
      txState,
      WALLET_EXTENSION,
      middleEllipsis,
      sendTransaction,
    };
  },
});
</script>

<template>
  <div class="fluid mt-4">
    <div class="text-2xl text-right">Current network: Westend</div>
    <div class="text-2xl">
      <a class="text-blue-400" target="_blank" :href="FAUCET">Westend Faucet</a>
    </div>
    <div class="text-2xl mt-2">
      <a class="text-blue-400" target="_blank" :href="WALLET_EXTENSION">
        Wallet extension
      </a>
    </div>
    <div v-if="account.address">
      <div class="mt-4 text-2xl">Balance</div>
      <div class="mt-2">
        <div
          class="
            bg-white
            rounded-md
            px-4
            py-6
            flex
            items-center
            justify-between
            shadow-md
          "
        >
          <div>
            <div>
              <span class="mr-2">Wallet name:</span>
              <span>{{ account.name }}</span>
            </div>
            <div>
              <span class="mr-2">Wallet address:</span>
              <span>
                <a
                  class="text-blue-400"
                  target="_blank"
                  :href="`https://westend.subscan.io/account/${account.address}`"
                >
                  {{ middleEllipsis(account.address) }}
                </a>
              </span>
            </div>
          </div>
          <div>{{ balance }} DOT</div>
        </div>
      </div>
      <div class="mt-4 mb-2">
        <el-button @click="sendTransaction">
          Make an example transaction
        </el-button>
      </div>
      <div v-if="txState.tx">
        <a
          class="text-blue-400"
          target="_blank"
          :href="`https://westend.subscan.io/extrinsic/${txState.tx}`"
        >
          {{ txState.tx }}
        </a>
      </div>
      <div v-if="txState.error" class="text-red-500">
        {{ txState.error }}
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
