<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <!-- <doughSelector v-model="pizza.dough"/>-->
        <doughSelector v-model="pizza.dough"/>
        <diameterSelector v-model="pizza.size"/>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <sauceSelector v-model="pizza.sauce"/>
              <fillingSelector :fillings="pizza.fillings" />              
            </div>
          </div>
        </div>

        <pizzaComputed v-model="pizza.name" :size="pizza.size" :dough="pizza.dough" :sauce="pizza.sauce" :fillings="pizza.fillings" :total="total" @addI="addI"/>
        
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

import { reactive, computed } from "vue";
import sizes from "@/mocks/sizes.json";
import doughs from "@/mocks/dough.json";
import ingredients from "@/mocks/ingredients.json";

const pizza = reactive({
  name:"",
  size: sizes[0].value,
  dough: doughs[0].value,
  sauce: "tomato",
  fillings: []
});

const total = 0;

const addI = (ingredient)=> {            
    pizza.fillings.push(ingredient);
}

</script>
