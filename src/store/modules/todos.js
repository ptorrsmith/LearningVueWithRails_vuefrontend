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
    async setPerPage({ commit }, event) {
        // get perPage value
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
        const response = await axios.get(api_url + `?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(api_url + `/${id}`);
        commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(api_url + `/${updatedTodo.id}`, updatedTodo);

        commit('setUpdatedTodo', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(
            api_url,
            {
                todo: {
                    title,
                    completed: false  // could / should also be set in Rails default on model
                }
            }
            );
         commit('newTodo', response.data);    
    }
};

const mutations = {  // modifying app's 'todos' state only via these mutations, called from actions 
    setTodos: (state, todos) => (state.todos = todos),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    setUpdatedTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    },
    newTodo: (state, todo) => (state.todos.unshift(todo))
};

export default {
    state,
    getters,
    actions,
    mutations
}