<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <SectionTitle size="big">Конструктор пиццы</SectionTitle>
        <DoughComp
          v-model="pizza.dough"
          :normalized-doughs="normalizedDoughs"
        />

        <SizeComp v-model="pizza.size" :normalized-sizes="normalizedSizes" />

        <div class="content__ingredients">
          <SheetCard class="ingredients">
            <template #title>Выберите ингредиенты</template>
            <SauceComp
              v-model="pizza.sauce"
              :normalized-sauces="normalizedSauces"
            />
            <IngredientsComp
              :normalized-ingredients="normalizedIngredients"
              :selected-ingredients="pizza.ingredients"
              @upgradeIngredientAmount="upgradeIngredientAmount"
            />
          </SheetCard>
        </div>

        <PizzaComp
          v-model="pizza.name"
          :sauce="pizza.sauce"
          :dough="pizza.dough"
          :ingredients="pizza.ingredients"
          :price="price"
          @addIngredient="addIngredient"
        />
      </div>
    </form>
  </main>
</template>

<script setup>
import { reactive, computed } from "vue";
import doughs from "../mocks/dough.json";
import ingredients from "../mocks/ingredients.json";
import sauces from "../mocks/sauces.json";
import sizes from "../mocks/sizes.json";

import {normalizeDough,normalizeSizes,normalizeIngredients,normalizeSauces,} from "../common/helpers";

import {  SheetCard,SectionTitle,} from "../common/components";

import {DoughComp,SizeComp,SauceComp,IngredientsComp,PizzaComp,} from "../modules/constructor";


const normalizedSizes = sizes.map((size) => normalizeSizes(size));
const normalizedSauces = sauces.map((sauce) => normalizeSauces(sauce));
const normalizedDoughs = doughs.map((dough) => normalizeDough(dough));

const normalizedIngredients = ingredients.map((ingredient) =>

  normalizeIngredients(ingredient)
);

const pizza = reactive({
  name: "",
  size: normalizedSizes[0].size,
  dough: normalizedDoughs[0].doughSize,
  sauce: normalizedSauces[0].sauce,
  ingredients: normalizedIngredients.reduce((acc, item) => {
    acc[item.ingredient] = 0;
    return acc;
  }, {}),
});

const price = computed(() => {
  const { dough, size, sauce, ingredients } = pizza;

  const sizeMult =
    normalizedSizes.find((item) => item.size === size)?.multiplier ?? 1;

  const doughPrice =
    normalizedDoughs.find((item) => item.doughSize === dough)?.price ?? 0;

  const saucePrice =
    normalizedSauces.find((item) => item.sauce === sauce)?.price ?? 0;

  const ingredientsPrice = normalizedIngredients
    .map((item) => ingredients[item.ingredient] * item.price)
    .reduce((acc, item) => acc + item, 0);
  return (doughPrice + saucePrice + ingredientsPrice) * sizeMult;
});

const addIngredient = (ingredient) => {
  pizza.ingredients[ingredient]++;
};

const upgradeIngredientAmount = (ingredient, count) => {
  pizza.ingredients[ingredient] = count;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>
