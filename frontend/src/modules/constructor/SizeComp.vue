<template>
  <div class="content__diameter">
    <SheetCard class="diameter">
      <template #title>Выберите размер</template>
      <label
        v-for="size in normalizedSizes"
        :key="size.id"
        class="diameter__input"
        :class="`diameter__input--${size.size}`"
      >
        <input
          type="radio"
          name="diameter"
          :value="size.size"
          class="visually-hidden"
          :checked="size.size === modelValue"
          @input="emit('update:modelValue', $event.target.value)"
        />
        <span>{{ size.name }}</span>
      </label>
    </SheetCard>
  </div>
</template>

<script setup>
import { SheetCard } from "../../common/components";
defineProps({
  normalizedSizes: { type: Object, required: true },
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
