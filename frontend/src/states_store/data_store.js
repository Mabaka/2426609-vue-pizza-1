import { defineStore } from 'pinia'
import ingredients from "@/mocks/ingredients.json";
import miscs from "@/mocks/misc.json";
import doughs from "@/mocks/dough.json";
import sizes from "@/mocks/sizes.json";
import sauces from "@/mocks/sauces.json";


import {
  normalizeDough,
  normalizeIngredients,
  normalizeSizes,
  normalizeSauces
} from "@/common/helpers";

export const DataStore = defineStore('data', {
  state: () => ({
    ingredients: ingredients.map((ingredient) => normalizeIngredients(ingredient)),
    misc: miscs,  
    sauce: sauces.map((sauce) => normalizeSauces(sauce)),
    dough: doughs.map((dough) => normalizeDough(dough)),        
    sizes: sizes.map((size) => normalizeSizes(size))
  }),
  getters: {},
  actions: {}
})