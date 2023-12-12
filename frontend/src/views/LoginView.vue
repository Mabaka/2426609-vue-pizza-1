<template>
    <div class="sign-form">

      <router-link to="/" class="close close--white">
        <span class="visually-hidden">Закрыть форму авторизации</span>
      </router-link>
      <div class="sign-form__title">
        <SectionTitle size="small">Авторизуйтесь на сайте</SectionTitle>
      </div>
      <form action="aaaa.html" method="post">
        <div class="sign-form__input">
          <label class="input">
            <span>E-mail</span>
            <input type="email" name="email" placeholder="example@mail.ru" />
          </label>
        </div>
  
        <div class="sign-form__input">
          <label class="input">
            <span>Пароль</span>
            <input type="password" name="pass" placeholder="***********" />
          </label>
        </div>
        <button type="submit" class="button">Авторизоваться</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { SectionTitle } from "../common/components";
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/app.scss";
  </style>
  