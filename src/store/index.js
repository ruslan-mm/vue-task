import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [
    { id: 1, edited: false, title: 'Первая задача' },
    { id: 2, edited: false, title: 'Вторая задача' },
    { id: 3, edited: false, title: 'Третья задача' },
  ],
},
  getters: {
    allTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    removeTask(state, i) {
      state.tasks.splice(i, 1)
    },
    addTask(state, newTask) {
      state.tasks.push(newTask)
    },
    changeEdit(state, i) {
      state.tasks[i].edited = !state.tasks[i].edited
    },
    changeTitle(state, { i, newTitle }) {
      if (newTitle) {
        state.tasks[i].title = newTitle
      }
    }
  },
})
