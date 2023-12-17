<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'HomeView' }" class="logo">
        <img src="../assets/img/logo.svg" alt="V!U!E! Pizza logo" width="90" height="40" />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ cart_store.fullCartPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="auth_store.user === null" class="header__login" to="/sign-in"><span>Войти</span></router-link>
      <div v-else class="header__user">
        <router-link to="/user/profile">
          <picture>
            <img src="@/assets/img/users/user5.jpg" srcset="@/assets/img/users/user5@2x.jpg" :alt="auth_store.user.name"
              width="32" height="32" />
          </picture>
          <span>{{ auth_store.user.name }}</span>
        </router-link>
        <router-link to="/" class="header__logout" @click="auth_store.logout"><span>Выйти</span></router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import { CartStore } from '../states_store/cart_store';
import { AuthStore } from '../states_store';

const auth_store = AuthStore();
const cart_store = CartStore();
</script>