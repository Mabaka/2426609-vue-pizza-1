<template>
    <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
            <p>Основной соус:</p>
            <label
                v-for="(sauce,index) in sauces"
                :key="sauce.id"
                class="radio ingredients__input"
            >
                <input type="radio" name="sauce" :value="sauce.value" :checked="index === 0" @click="emits('selectSauce',sauce)">
                <span>{{sauce.name}}</span>
            </label>
        </div>        
    </div>
</template>

<script setup>
import sauces from "@/mocks/sauces.json";
defineProps({
  modelValue: {
      type: Object,
      required: true,
    }
});
const emits = defineEmits(["selectSauce","update:modelValue"]);
</script>