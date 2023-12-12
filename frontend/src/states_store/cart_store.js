import { defineStore } from 'pinia'

export const CartStore = defineStore('cart', {
	state: () => ({
		phone: "",
		address: {},
		pizzas: [],
		misc: []
	}),
	getters: {},
	actions: {}
})