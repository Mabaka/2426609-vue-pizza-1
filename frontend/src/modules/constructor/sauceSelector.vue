<template>
    <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
            <p>Основной соус:</p>
            <label class="radio ingredients__input">
                <input type="radio" name="sauce" value="tomato" checked />
                <span>Томатный</span>
            </label>
            <label class="radio ingredients__input">
                <input type="radio" name="sauce" value="creamy" />
                <span>Сливочный</span>
            </label>
        </div>        
    </div>
</template>

<script setup>
defineProps({
  modelValue: {
      type: String,
      required: true,
    }
});
const emit = defineEmits(["update:modelValue"]);
</script>