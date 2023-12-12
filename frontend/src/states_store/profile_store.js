import { defineStore } from 'pinia'

export const ProfileStore = defineStore('profile', {
	state: () => ({
		profile: {
			id: "",
			name: "",
			email: "",
			avatar: "",
			phone: "",
			addresses:[]
		},
	}),
	getters: {},
	actions: {}
})