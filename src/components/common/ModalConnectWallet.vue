<script lang="ts">
import { defineComponent, computed } from 'vue';
import { SUPPORTED_WALLETS } from '@/utils';
import { modalConnectOpen, connect, isConnecting } from '@/hooks';

export default defineComponent({
  setup() {
    const listWallets = computed(() => {
      return [...SUPPORTED_WALLETS];
    });
    const onClickWallet = async wallet => {
      await connect(wallet);
      modalConnectOpen.value = false;
    };
    return {
      listWallets,
      modalConnectOpen,
      isConnecting,
      onClickWallet,
    };
  },
});
</script>

<template>
  <el-dialog
    title="Connect Wallet"
    v-model="modalConnectOpen"
    width="30%"
    center
  >
    <span></span>
    <div v-for="wallet in listWallets" :key="wallet">
      <button
        @click="onClickWallet(wallet)"
        :disabled="isConnecting"
        class="w-full focus:outline-none border border-gray-500 mb-3 py-1"
      >
        {{ $t(`WALLET.${wallet.toUpperCase()}`) }}
      </button>
    </div>
  </el-dialog>
</template>
