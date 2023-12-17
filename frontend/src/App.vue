<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
  import { AppLayout } from "@/layouts";
  import { DataStore, AuthStore } from "./states_store";
  const data_store = DataStore();
  const auth_store = AuthStore();
  data_store.fetchdata();
  auth_store.whoAmI(); 
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
 