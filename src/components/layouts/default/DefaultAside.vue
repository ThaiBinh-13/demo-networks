<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { SIDEBAR_WIDTH } from '@/configs';
import AsideItem from './DefaultAsideItem.vue';

interface MenuItem {
  title: string;
  location: string;
  children?: MenuItem[];
}

export default defineComponent({
  components: { AsideItem },
  setup() {
    const route = useRoute();
    const { path } = route;
    const MENU: MenuItem[] = [
      {
        title: 'CHECKER',
        location: '/checker',
      },
      {
        title: 'HISTORY_V1',
        location: '/history-v1',
      },
      {
        title: 'HISTORY_V2',
        location: '/history-v2',
      },
      {
        title: 'HEALTH_CHECK',
        location: '/health-check',
      },
    ];

    return {
      SIDEBAR_WIDTH,
      MENU,
      path,
    };
  },
});
</script>

<template>
  <el-aside :width="SIDEBAR_WIDTH" class="aside">
    <el-scrollbar max-height="calc(100vh - 56px)">
      <el-menu
        :default-active="path"
        class="aside__menu"
        background-color="#fff"
        text-color="#000"
        active-text-color="#3182ce"
        router
      >
        <template v-for="item in MENU" :key="item.location">
          <el-menu-item :index="item.location">
            <AsideItem :title="item.title" />
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style lang="scss" scoped>
.aside {
  @apply overflow-hidden;

  border-right: 1px solid #e8e8e8;
  .el-menu {
    @apply border-r-0;
    .el-menu-item:hover {
      background: white !important;
      color: #3182ce !important;
    }
  }
}
.el-menu-vertical-demo {
  @apply border-r-0;
}
</style>
