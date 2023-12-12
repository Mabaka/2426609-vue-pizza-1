import { defineStore } from 'pinia'

export const DataStore = defineStore('data', {
	state: () => ({
		dough:[],
        ingredients:[],
        misc:[],
        sauce:[],
        sizes:[]
	}),
	getters: {},
	actions: {}
})