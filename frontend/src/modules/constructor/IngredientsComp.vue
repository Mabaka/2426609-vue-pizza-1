<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        v-for="ingredient in normalizedIngredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag
          :transfer-data="ingredient"
          :draggable="getValue(ingredient.ingredient) < 3"
        >
          <span class="filling" :class="`filling--${ingredient.ingredient}`">{{
            ingredient.name
          }}</span></AppDrag
        >

        <AppCounter
          class="ingredients__counter"
          :ingredient="ingredient.ingredient"
          :count="getValue(ingredient.ingredient)"
          @decrement="
            decrement(
              ingredient.ingredient,
              getValue(ingredient.ingredient) - 1
            )
          "
          @increment="
            increment(
              ingredient.ingredient,
              getValue(ingredient.ingredient) + 1
            )
          "
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { AppCounter, AppDrag } from "../../common/components";
const props = defineProps({
  normalizedIngredients: {
    type: Object,
    required: true,
  },
  selectedIngredients: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["upgradeIngredientAmount"]);

const getValue = (ingredient) => {
  return props.selectedIngredients[ingredient];
};

const decrement = (ingredient, count) => {
  emits("upgradeIngredientAmount", ingredient, count);
};

const increment = (ingredient, count) => {
  emits("upgradeIngredientAmount", ingredient, count);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>
