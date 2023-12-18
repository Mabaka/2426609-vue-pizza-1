<template>
  <transition name="fade">
    <div class="popup">
      <router-link :to="{ name: 'OrdersView' }" class="close">
        <span class="visually-hidden">Закрыть попап</span>
      </router-link>
      <div class="popup__title">
        <h2 class="title">Спасибо за заказ</h2>
      </div>
      <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
      <div class="popup__button">
        <router-link :to="{ name: 'OrdersView' }" class="button"
          >Отлично, я жду!</router-link
        >
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";

.fade-enter,
.fade-leave {
  transition: opacity 0.3s ease-in-out;
}
</style>
