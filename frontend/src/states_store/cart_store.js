import { defineStore } from 'pinia'

export const CartStore = defineStore('cart', {
	state: () => ({
		phone: "",
		address: {},
		pizzas: [],
		misc: []
	}),
	getters: {
		fullCartPrice: (state) => {
			const pizzaPrice = state.pizzas.reduce((sum, pizza) => sum + pizza.price, 0);
			const miscPrice = state.misc.reduce((sum, el) => sum + el.price, 0);
			return pizzaPrice + miscPrice;
		},
		getPhone: (state)=> {
			return state.phone;
		},
		getAddress: (state)=> {
			return state.address;
		},
		getPizzas: (state)=> {
			return state.pizzas;
		},
		getMisc: (state)=> {
			return state.misc;
		}
	},
	actions: {}
})