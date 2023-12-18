<template>
    <div class="appLayout">
      <app-header></app-header>
      <AppSB></AppSB>
      <slot />
    </div>
  </template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppSB from "./AppSB.vue";
</script>

<style lang="scss" scoped>
.appLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>