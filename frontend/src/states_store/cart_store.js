import { defineStore } from 'pinia'

export const CartStore = defineStore('cart', {
	state: () => ({
		phone: "",
		address: {},
		pizzas: [],
		misc: [
			{
			  id: 0,
			  name: "Coca-Cola 0,5 литра",
			  cost: "x 56 ₽",
			  src: "/src/assets/img/cola.svg",
			  price: 56,
			  quantity: 0,
			},
			{
			  id: 1,
			  name: "Острый соус",
			  cost: "x 30 ₽",
			  src: "/src/assets/img/sauce.svg",
			  price: 30,
			  quantity: 0,
			},
			{
			  id: 2,
			  name: "Картошка из печи",
			  cost: "x 56 ₽",
			  src: "/src/assets/img/potato.svg",
			  price: 56,
			  quantity: 0,
			},
		  ]
	}),
	getters: {
		fullCartPrice: (state) => {
			const pizzasPrice = state.pizzas.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0) ?? 0;
			const miscPrice = state.misc.reduce((sum, el) => sum + el.price * el.quantity, 0) ?? 0;
			return pizzasPrice + miscPrice;
		},
		getPhone: (state) => {
			return state.phone;
		},
		getAddress: (state) => {
			return state.address;
		},
		getPizzas: (state) => {
			return state.pizzas;
		},
		getMisc: (state) => {
			return state.misc;
		}
	},
	actions: {
		pizza_add(pizza) {
			const have = this.pizzas.find((item) => item.id === pizza.id);
			if (have) {
				have.quantity = have.quantity + 1;
			} else {
				this.pizzas.push({ ...pizza, quantity: 1 });
			}
		},
		pizza_edit(created_pizza) {			
			const index = this.pizzas.findIndex((pizza) => pizza.id === created_pizza.id);
			const have = this.pizzas.find((item) => item?.id === created_pizza?.id) ?? -1;
			this.pizzas.splice(index, 1, {
				...created_pizza,
				quantity: have.quantity,
			});
		},
		pizza_drop(id) {
			const have = this.pizzas.find((item) => item.id === id);
			if (have.quantity === 1) {
				this.pizzas = this.pizzas.filter((pizza) => pizza.id !== id);
			} else {
				have.quantity = have.quantity - 1;
			}
		},
		misc_add(misc_created) {
			const have = this.misc.find((item) => item.id === misc_created.id);
			if (have) {
				have.quantity = have.quantity + 1;
			} else {
				this.misc.push({ ...misc_created, quantity: 1 });
			}
		},
		misc_drop(id) {
			const have = this.misc.find((item) => item.id === id);
			have.quantity = have.quantity - 1;				
		},
		clean() {
			this.pizzas = [];
			this.misc = [
			  {
				id: 0,
				name: "Coca-Cola 0,5 литра",
				cost: "x 56 ₽",
				src: "/src/assets/img/cola.svg",
				price: 56,
				quantity: 0,
			  },
			  {
				id: 1,
				name: "Острый соус",
				cost: "x 30 ₽",
				src: "/src/assets/img/sauce.svg",
				price: 30,
				quantity: 0,
			  },
			  {
				id: 2,
				name: "Картошка из печи",
				cost: "x 56 ₽",
				src: "/src/assets/img/potato.svg",
				price: 56,
				quantity: 0,
			  },
			];
		  },
	}
})