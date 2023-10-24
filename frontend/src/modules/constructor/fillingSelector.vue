<template>
    <div class="ingredients__filling">
        <p>Начинка:</p>
        <ul class="ingredients__list">
            <li
                v-for="ingredient in ingredients"
                :key="ingredient.value"
                class="ingredients__item"
            >
                <AppDrag :transfer-data="ingredient">
                    <span :class="['filling',`filling--${ingredient.value}`]">{{ ingredient.name }}</span>                            
                </AppDrag>

                <div class="counter counter--orange ingredients__counter">
                    <button
                        type="button"
                        class="counter__button counter__button--minus"
                        @click="emits('remI',ingredient)"
                        :disabled="!fillings.filter((value)=>{return value.name == ingredient.name}).length > 0"
                    >
                        <span class="visually-hidden">Меньше</span>
                    </button>    
                    <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        :value="fillings.filter((value)=>{return value.name == ingredient.name}).length"
                    />  
                    <button
                        type="button"
                        class="counter__button counter__button--plus"
                        @click="emits('addI',ingredient)"
                    >
                    <span class="visually-hidden">Больше</span>
                    </button>  
                </div>    
            </li>        
        </ul>        
    </div>
</template>

<script setup>    
    import ingredients from "@/mocks/ingredients.json";
    import AppDrag from "@/common/components/AppDrag.vue";

    const props = defineProps({   
        fillings: {
        type: Array,
        required: true,
    },        
  });  

  const emits = defineEmits(['addI', 'remI' ,"update:modelValue"]);
  
</script>