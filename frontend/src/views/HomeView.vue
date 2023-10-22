<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <!-- <doughSelector v-model="pizza.dough"/>-->
        <doughSelector v-model="pizza.dough" @selectDough="selectDough"/>
        <diameterSelector v-model="pizza.size"/>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <sauceSelector v-model="pizza.sauce" @selectSauce="selectSauce"/>
              <fillingSelector :fillings="pizza.fillings" @addI="addI" @remI="remI" />              
            </div>
          </div>
        </div>

        <pizzaComputed v-model="pizza.name" :size="pizza.size" :dough="pizza.dough" :sauce="pizza.sauce" :fillings="pizza.fillings" :total="total" :name="pizza.name" @addI="addI"/>
        
      </div>
    </form>
  </main>
</template>

<script setup>

import doughSelector from "@/modules/constructor/doughSelector.vue"
import diameterSelector from "@/modules/constructor/diameterSelector.vue"
import sauceSelector from "@/modules/constructor/sauceSelector.vue"
import fillingSelector from "@/modules/constructor/fillingSelector.vue"
import pizzaComputed from "@/modules/constructor/pizzaComputed.vue"

import { reactive , ref} from "vue";
import sizes from "@/mocks/sizes.json";
import doughs from "@/mocks/dough.json";
import sauces from "@/mocks/sauces.json";

const name_pizza = ref('Пицца')

const pizza = reactive({
  name:name_pizza.value,
  size: sizes[0],
  dough: doughs[0],
  sauce: sauces[0],
  fillings: []
});

const total = ref(
  pizza.dough.price + pizza.sauce.price
);

const addI = (ingredient)=> {        
    total.value = total.value + ingredient.price;   
    pizza.fillings.push(ingredient);
}

const remI = (ingredient)=>{
  const index = pizza.fillings.indexOf(ingredient);
  if(index !== -1){
    total.value = total.value - ingredient.price;
    pizza.fillings.splice(index,1);
  }
}

const selectDough = (dough)=>{
  total.value = total.value - pizza.dough.price;
  pizza.dough = dough;
  total.value = total.value + dough.price;
}

const selectSauce = (sauce)=>{
  total.value = total.value - pizza.sauce.price;
  pizza.sauce = sauce;
  total.value = total.value + sauce.price;
}

</script>
