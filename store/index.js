import axios from 'axios';

export const state = () => ({
	items: []
})

export const mutations = {
	addItem(state, item) {
		state.items.push(item)
		console.log(item);
	}
}

export const actions = {
	async addNewItem({ commit }, newItemData) {
		try {
			const apiUrl = process.env.API_URL;
			const response = await axios.post(`${apiUrl}/projects`, newItemData);
			const newItem = response.data;

			commit('addItem', newItem);
			return newItem;
		} catch (error) {
			console.error('Erreur lors de la requête à l\'API :', error);
			throw error;
		}
	}
}
