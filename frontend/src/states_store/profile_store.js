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
			this.email = email;
		},
		logout() {			
			this.id = 0;
			this.name = "";
			this.email = "";
			this.avatar = "";
			this.phone = "";
			this.orders = [];
			this.addresses = [];
		},
		order_add(order){
			this.orders.push(order);
		},
		order_drop(id) {
			this.orders = this.orders.filter((order) => order.id !== id);
		},
		orders_clear() {
			this.orders = [];
		},
		address_add(address) {
			this.addresses.push(address);
		},
		address_drop(id) {
			this.addresses = this.addresses.filter((address) => address.id !== id);
		},
		address_edit(address_created) {
			const index = this.addresses.findIndex(
			  (address) => address.id === address_created.id
			);
			this.addresses.splice(index, 1, address_created);
		  },
    }
})