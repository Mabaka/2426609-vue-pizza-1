<template>
  <div class="sign-form">
    <router-link to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </router-link>
    <div class="sign-form__title">
      <SectionTitle size="small">Авторизуйтесь на сайте</SectionTitle>
    </div>
    <form action="test.html" method="post" @submit.prevent="login">
      <div class="sign-form__input">
        <label class="input">
          <span>E-mail</span>
          <input v-model="user.email" type="email" name="email" placeholder="example@mail.ru" />
        </label>
      </div>

      <div class="sign-form__input">
        <label class="input">
          <span>Пароль</span>
          <input v-model="user.password" type="password" name="pass" placeholder="***********" />
        </label>
      </div>
      <button type="submit" class="button">Авторизоваться</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ProfileStore } from "../states_store/";
import { SectionTitle } from "../common/components";
import { reactive } from "vue";

const profile_store = ProfileStore();
const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const login = () => {
  try {
    profile_store.login(user);
    router.push("/user");
  } catch (error) {
    alert(error);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>