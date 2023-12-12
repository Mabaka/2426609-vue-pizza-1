<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'HomeView' }" class="logo">
        <img
          src="../assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ cart_store.fullCartPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link class="header__login" to="/sign-in"
        ><span>Войти</span></router-link
      >
    </div>
  </header>
</template>
<script setup>
  import { CartStore } from '../states_store/cart_store';
  const cart_store = CartStore();
</script>