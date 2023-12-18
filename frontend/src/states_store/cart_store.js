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
	actions: {
        pizza_add(pizza){
            const have = state.pizzas.find((item)=>item.id===pizza.id);
            if(have){
                have.quantity = have.quantity + 1;
            }else{
                state.pizzas.push({...pizza,quantity: 1});
            }
        },
        pizza_edit(created_pizza){
            const index = state.pizzas.findIndex((pizza)=>pizza.id===created_pizza.id);
            this.pizzas.splice(index,1,created_pizza);
        },
        pizza_drop(id){
            const have = state.pizzas.find((item)=>item.id===pizza.id);
            if(have.quantity===1){
                state.pizzas = state.pizzas.filter((pizza)=>pizza.id !==id);
            }else{
                have.quantity = have.quantity - 1;
            }
        },
        misc_add(misc_created) {
			const have = state.misc.find((item) => item.id === misc_created.id);

			if (have) {
				have.quantity = have.quantity + 1;
			} else {
				state.misc.push({ ...misc_created, quantity: 1 });
			}
		},
		misc_drop(id) {
			
			const have = state.misc.find((item) => item.id === pizza.id);
			if (have.quantity === 1)
				state.misc = state.misc.filter((pizza) => pizza.id !== id);
			else 
				have.quantity = have.quantity - 1;
		},
    }
})