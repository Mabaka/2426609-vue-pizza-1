<template>  
    <div class="popup">
      <router-link :to="{ name: 'OrdersView' }" class="close">
        <span class="visually-hidden">Закрыть попап</span>
      </router-link>
      <div class="popup__title">
        <h2 class="title">Спасибо за заказ</h2>
      </div>
      <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
      <div class="popup__button">
        <transition name="slide">
          <router-link :to="{ name: 'OrdersView' }" class="button">Отлично, я жду!</router-link>
        </transition>        
      </div>
    </div>  
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";

.slide-enter-active {
  transition: all 0.4s;
}

.slide-enter {
  opacity: 0;
  margin-left: 90px;
}

.slide-leave-active {
  transition: all 0.4s;
  opacity: 0;
  margin-left: -100px;
}
</style>
