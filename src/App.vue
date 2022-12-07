<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  RouteRecordNormalized,
  RouteRecordRaw,
  RouterLink,
  RouterView,
  useRouter,
} from 'vue-router';
import { NLayout, NLayoutSider, NLayoutContent, NMenu } from 'naive-ui';
import { MenuOption } from 'naive-ui/es/menu/src/interface';
import { h } from 'vue';

const router = useRouter();
console.log('router', router.getRoutes());
const generateMenu = (
  routers: RouteRecordNormalized[] | RouteRecordRaw[]
): MenuOption[] =>
  routers.map((r) => {
    const label = r.name ? String(r.name) : r.path;
    const retObj = {
      label: () => h(RouterLink, { to: { path: r.path } }, { default: () => label }),
      key: label,
    };
    return r.children?.length
      ? { ...retObj, children: generateMenu(r.children) }
      : retObj;
  });
const menuOptions = generateMenu(router.getRoutes());
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      <n-menu :options="menuOptions" />
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<style scoped></style>
