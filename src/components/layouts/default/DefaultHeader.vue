<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { middleEllipsis } from '@/utils';
import {
  account,
  listAccounts,
  connect,
  setUserWallet,
  IAccount,
  onChangeAccountConnected,
} from '@/hooks';

export default defineComponent({
  setup() {
    const connectWallet = () => {
      connect();
    };
    const changeAccount = (acc: IAccount) => {
      onChangeAccountConnected(acc);
    };
    onMounted(() => {
      if (account.value.address) {
        connect();
      }
    });
    return {
      account,
      listAccounts,
      connectWallet,
      changeAccount,
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
          <h1 class="text-3xl font-bold text-white">Demo Polkadot</h1>
          <div>
            <el-dropdown v-if="account.address">
              <button
                class="
                  text-white
                  border border-solid border-white
                  px-6
                  py-2
                  focus:outline-none
                "
              >
                <span class="mr-2">
                  {{ account.name }}
                </span>

                <span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              </button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="acc in listAccounts"
                    :key="acc.address"
                    @click="changeAccount(acc)"
                  >
                    <i
                      v-show="acc.address === account.address"
                      class="el-icon-check"
                    ></i>
                    <span class="mr-2">
                      {{ acc.name }}
                    </span>
                    <span>{{ middleEllipsis(acc.address) }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <button
              v-else
              @click="connectWallet"
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
    <!-- <ModalConnectWallet /> -->
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
