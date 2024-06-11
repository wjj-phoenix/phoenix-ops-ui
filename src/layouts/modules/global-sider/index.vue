<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store/modules/theme';
import GlobalLogo from '../global-logo/index.vue';
import VerticalMixMenu from '../global-menu/vertical-mix-menu.vue';

defineOptions({
  name: 'GlobalSider'
});

const themeStore = useThemeStore();

const darkMenu = computed(() => !themeStore.darkMode && themeStore.sider.inverted);
</script>

<template>
  <DarkModeContainer class="size-full flex-col-stretch shadow-sider" :inverted="darkMenu">
    <VerticalMixMenu>
      <GlobalLogo :show-title="false" :style="{ height: themeStore.header.height + 'px' }" />
    </VerticalMixMenu>
  </DarkModeContainer>
</template>

<style scoped></style>
