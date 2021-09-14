<script lang="ts">
/* eslint-disable @intlify/vue-i18n/no-dynamic-keys */
import { defineComponent, computed, onMounted } from 'vue';
import { middleEllipsis } from '@/utils';
import {
  account,
  modalConnectOpen,
  disconnect,
  reconnectWallet,
} from '@/hooks';

export default defineComponent({
  setup() {
    const accountId = computed(() => {
      return account.value;
    });
    const openModalConnect = () => {
      modalConnectOpen.value = true;
    };
    onMounted(async () => {
      await reconnectWallet();
    });
    return {
      accountId,
      openModalConnect,
      disconnect,
      middleEllipsis,
    };
  },
});
</script>

<template>
  <div>
    <header class="default-header">
      <nav class="topbar">
        <div class="topbar__content">
          <h1 class="text-3xl font-bold text-white">Demo</h1>
          <div>
            <span v-if="accountId" class="text-white text-base mr-3">
              Account: {{ middleEllipsis(accountId) }}
            </span>
            <button
              v-if="accountId"
              @click="disconnect"
              class="
                text-white
                border border-solid border-white
                px-6
                py-1
                focus:outline-none
              "
            >
              Disconnect
            </button>
            <button
              v-else
              @click="openModalConnect"
              class="
                text-white
                border border-solid border-white
                px-6
                py-1
                focus:outline-none
              "
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
    <ModalConnectWallet />
  </div>
</template>

<style lang="scss" scoped>
.default-header {
  @apply px-0;
}
.topbar {
  @apply flex h-full p-6 bg-gray-900;

  &__content {
    @apply flex-1;
    @apply h-full px-4 flex items-center justify-between;
  }
}
</style>
