import { defineStore } from 'pinia'

export const PizzaStore = defineStore('pizza', {
	state: () => ({
		pizza: {
			name: "",
			dough: {},
			size: {},
			sauce: {},
			ingredients: [],
		  },
	}),
	getters: {
		fullPizzaPrice: (state) => {
			const ingredientsFullPrice = state.ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
			const mlt = state.size.multiplier;
			return (mlt * (state.sauce.price + state.dough.price + ingredientsFullPrice));
		},
		getDough: (state)=> {
			return state.dough;
		},
		getSize: (state)=> {
			return state.size;
		},
		getSauce: (state)=> {
			return state.sauce;
		},
		getIngredients: (state)=> {
			return state.ingredients;
		}
	},
	actions: {
        ing_add(ing_created) {
			const have = state.ingredients.find((item) => item.id === ing_created.id);
			if (have) {
				have.quantity += 1;
			} else {
				state.ingredients.push({ ...ing_created, quantity: 1 });
			}
		},
    }
})