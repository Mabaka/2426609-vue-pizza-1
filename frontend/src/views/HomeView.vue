<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <SectionTitle size="big">Конструктор пиццы</SectionTitle>
        <DoughComp v-model="pizza_store.dough" :normalized-doughs="data_store.dough" />

        <SizeComp v-model="pizza_store.size" :normalized-sizes="data_store.sizes" />

        <div class="content__ingredients">
          <SheetCard class="ingredients">
            <template #title>Выберите ингредиенты</template>
            <SauceComp v-model="pizza_store.sauce" :normalized-sauces="data_store.sauce" />
            <IngredientsComp :normalized-ingredients="data_store.ingredients"
              :selected-ingredients="pizza_store.ingredients"
              @upgradeIngredientCount="pizza_store.upgradeIngredientCount" />
          </SheetCard>
        </div>

        <PizzaComp v-model="pizza_store.name" :sauce="pizza_store.sauce" :disabledButton="buttonDisabled"
          :ingredients="pizza_store.ingredients" :dough="pizza_store.dough" :price="pizza_store.fullPizzaPrice"
          @ing_add="pizza_store.ing_add" @addPizza="addPizza" />
      </div>
    </form>
  </main>
</template>

<script setup>
import { computed } from "vue";

import { SheetCard, SectionTitle, } from "../common/components";
import { DoughComp, SizeComp, SauceComp, IngredientsComp, PizzaComp, } from "../modules/constructor";

import { DataStore, PizzaStore, CartStore } from "../states_store";
import { useRoute } from "vue-router";
const cart_store = CartStore();
const data_store = DataStore();
const pizza_store = PizzaStore();

const route = useRoute();
const { id } = route.params;
if (id){
  pizza_store.pizzaState_set(cart_store.pizzas.find((pizza) => pizza.id === +id));
}
else{
  pizza_store.pizzaState_set({
    id: Math.floor(Math.random() * 100) + 1,
    name: "",
    dough: data_store.dough[0],
    size: data_store.sizes[0],
    sauce: data_store.sauce[0],
    ingredients: [],
  }); 
}
const addPizza = () => {
  if (id) {
    cart_store.pizza_edit(pizza_store.getPizzaInfo);
  } else {
    cart_store.pizza_add(pizza_store.getPizzaInfo);
  }
};

const buttonDisabled = computed(() => {  
  return pizza_store.name === "";
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>
