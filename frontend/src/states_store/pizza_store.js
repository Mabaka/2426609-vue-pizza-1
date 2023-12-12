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
	getters: {},
	actions: {}
})