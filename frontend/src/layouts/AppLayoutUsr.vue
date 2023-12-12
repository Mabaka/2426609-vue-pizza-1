<template>
    <div class="appLayout">
      <app-header></app-header>
      <app-side-bar></app-side-bar>
      <slot />
    </div>
  </template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppSideBar from "./AppSB.vue";
</script>

<style lang="scss" scoped>
.appLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>