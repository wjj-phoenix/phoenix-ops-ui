<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';
import { useThemeStore } from '@/store/modules/theme';
import GlobalBreadcrumb from '../global-breadcrumb/index.vue';
import GlobalSearch from '../global-search/index.vue';
import UserAvatar from './components/user-avatar.vue';

defineOptions({
  name: 'GlobalHeader'
});

const appStore = useAppStore();
const themeStore = useThemeStore();
</script>

<template>
  <DarkModeContainer class="h-full flex-y-center px-12px shadow-header">
    <div class="h-full flex-y-center flex-1-hidden">
      <GlobalBreadcrumb v-if="!appStore.isMobile" class="ml-12px" />
    </div>
    <div class="h-full flex-y-center justify-end">
      <GlobalSearch />
      <ThemeSchemaSwitch :theme-schema="themeStore.themeScheme" :is-dark="themeStore.darkMode" @switch="themeStore.toggleThemeScheme" />
      <UserAvatar />
    </div>
  </DarkModeContainer>
</template>

<style scoped></style>
