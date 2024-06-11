<script setup lang="ts">
import { computed } from 'vue';
import {  dateZhCN, zhCN } from 'naive-ui';
import { NConfigProvider, darkTheme } from 'naive-ui';
import { useThemeStore } from './store/modules/theme';

defineOptions({
  name: 'App'
});

const themeStore = useThemeStore();

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined));
</script>

<template>
  <NConfigProvider :theme="naiveDarkTheme" :theme-overrides="themeStore.naiveTheme" :locale="zhCN" :date-locale="dateZhCN" class="h-full">
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </NConfigProvider>
</template>
