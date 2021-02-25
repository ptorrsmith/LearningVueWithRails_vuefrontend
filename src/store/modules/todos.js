import axios from 'axios';
const api_url = "http://localhost:3000/api/v1/todos"

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};


/*
    'fetchTodos', 
    'deleteTodo', 
    'updateTodo'
*/
const actions = {
    async fetchTodos({ commit }) {

        // 
        console.log('fetching todos');
        // 
        
        const response = await axios.get(api_url);
        commit('setTodos', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(api_url + `/${id}`);
        commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(api_url + `/${updatedTodo.id}`);

        commit('setUpdatedTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    setUpdatedTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}