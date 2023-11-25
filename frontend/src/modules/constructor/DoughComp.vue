<template>
  <div class="content__dough">
    <SheetCard class="dough">
      <template #title>Выберите тесто</template>
      <label
        v-for="dough in normalizedDoughs"
        :key="dough.id"
        class="dough__input"
        :class="`dough__input--${dough.doughSize}`"
      >
        <input
          type="radio"
          name="dought"
          :value="dough.doughSize"
          class="visually-hidden"
          :checked="dough.doughSize === modelValue"
          @input="emit('update:modelValue', $event.target.value)"
        />
        <b>{{ dough.name }}</b>
        <span>{{ dough.description }}</span>
      </label>
    </SheetCard>
  </div>
</template>

<script setup>
import { SheetCard } from "../../common/components";
defineProps({
  normalizedDoughs: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>
