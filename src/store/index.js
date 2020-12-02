import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		items: [
		{
			name:"Retirar envió",
			done: true
		},
		{
			name:"Calificar producto",
			done: false
		},
		{
			name:"Avisar a Fred",
			done: false
		}
		]
	},
	mutations: {
		addItem(state, item) {
			state.items.push(item)
		},
		editItem(state, { item, name = item.name, done = item.done }) {
			item.name = name;
			item.name = done;
		},
		removeItem(state, item) {
			state.items.splice(state.items.indexOf(item), 1);
		}
	},
	actions: {
		addItem({ commit }, item) {
			commit("addItem", {
				name: item,
				done: false
			})
		},
		editItem({ commit }, { item, name }) {
			commit("editItem", { item, name });
		},
		toggleItem({ commit }, item) {
			commit("editItem", { item, done: !item.done })
		}
	},
	modules: {
	}
})
