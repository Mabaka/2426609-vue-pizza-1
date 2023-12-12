import { defineStore } from 'pinia'

export const ProfileStore = defineStore('profile', {
	state: () => ({
		 
			id: 0,
			name: "",
			email: "",
			avatar: "",
			phone: "",
			addresses:[],
            orders:[],
	}),
	getters: {
		getAddresses: (state)=> {
			return state.addresses;
		},
		getOrders: (state)=> {
			return state.orders;
		},
		getName: (state)=> {
			return state.name;
		},
		getEmail: (state)=> {
			return state.email;
		},
		getAvatar: (state)=> {
			return state.avatar;
		},
		getPhone: (state)=> {
			return state.phone;
		}
	},
	actions: {
        login(email, password) {			
		},
		logout() {			
			state.id = 0;
			state.name = "";
			state.email = "";
			state.avatar = "";
			state.phone = "";
			state.orders = [];
			state.addresses = [];
		},
		order_add(order){
			state.orders.push(order);
		},
		order_drop(id) {
			state.orders = state.orders.filter((order) => order.id !== id);
		},
		orders_clear() {
			state.orders = [];
		},
		address_add(address) {
			state.addresses.push(address);
		},
		address_drop(id) {
			state.addresses = state.addresses.filter((address) => address.id !== id);
		},
    }
})