<template>
    <main class="layout">
      <div class="layout__content">
        <div class="layout__title">
          <SectionTitle size="big">История заказов</SectionTitle>
        </div>
  
        <section
          v-for="order in profile_store.orders"
          :key="order.id"
          class="sheet order"
        >
          <div class="order__wrapper">
            <div class="order__number">
              <b>Заказ #{{ order.id }}</b>
            </div>
  
            <div class="order__sum">
              <span>Сумма заказа: {{ order.price }} ₽</span>
            </div>
  
            <div class="order__button">
              <button
                type="button"
                class="button button--border"
                @click="profile_store.order_drop(order.id)"
              >
                Удалить
              </button>
            </div>
            <div class="order__button">
              <button
                type="button"
                class="button"
                @click="profile_store.order_add({ ...order, id: Math.floor(Math.random() * 100) + 1 })"
              >
                Повторить
              </button>
            </div>
          </div>
  
          <ul class="order__list">
            <li
              v-for="pizza in order.orderPizzas"
              :key="pizza.id"
              class="order__item"
            >
              <div class="product">
                <img
                  src="../assets/img/product.svg"
                  class="product__img"
                  width="56"
                  height="56"
                  :alt="pizza.name"
                />
                <div class="product__text">
                  <h2>{{ pizza.name }}</h2>
                  <ul>
                    <li>{{ pizza.size.name }}, {{ pizza.dough.name }}</li>
                    <li>Соус: {{ pizza.sauce.name }}</li>
                    <li>
                      {{ pizza.ingredientsString }}
                    </li>
                  </ul>
                </div>
              </div>
  
              <p class="order__price">
                {{ priceString(pizza.price, pizza.quantity) }}
              </p>
            </li>
          </ul>
  
          <ul class="order__additional">
            <li v-for="misc in order.orderMisc" :key="misc.id">
              <img :src="misc.src" width="20" height="30" :alt="misc.name" />
              <p>
                <span>{{ misc.name }}</span>
                <b>{{ misc.price }} ₽</b>
              </p>
            </li>
          </ul>
  
          <p class="order__address">Адрес доставки: {{ order.orderAddress }}</p>
        </section>
      </div>
    </main>
  </template>
  
  <script setup>
  import { SectionTitle } from "../common/components";
  import { ProfileStore } from "../states_store/";
  const profile_store = ProfileStore();
  
  const priceString = (price, quantity) => {
    return `${quantity} x ${price} ₽`;
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/app.scss";
  </style>