<template>
  <div class="content__pizza">
    <TextInput
      name="pizza_name"
      label="Название пиццы"
      placeholder="Введите название пиццы"
      @input="setName"
    />
    <AppDrop @drop="emits('addIngredient', $event.ingredient)">
      <div class="content__constructor">
        <div class="pizza" :class="`pizza--foundation--${dough}-${sauce}`">
          <div class="pizza__wrapper">
            <div
              v-for="(value, key) in pizzaIngredients"
              :key="key"
              class="pizza__filling"
              :class="[
                `pizza__filling--${key}`,
                value === 2 && 'pizza__filling--second',
                value === 3 && 'pizza__filling--third',
              ]"
            />
          </div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ price }} ₽</p>
      <NormalButton label="Готовьте!" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { AppDrop, TextInput, NormalButton } from "../../common/components";

const props = defineProps({
  sauce: {
    type: String,
    required: true,
  },
  dough: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Object,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["addIngredient", "update:modelValue"]);

const pizzaIngredients = computed(() => {
  return Object.entries(props.ingredients).reduce((result, entry) => {
    const [key, value] = entry;
    if (value > 0) {
      result[key] = value;
    }
    return result;
  }, {});
});

const setName = (name) => {
  emits("update:modelValue", name);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>
