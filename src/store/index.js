import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { edited: false, title: 'Первая задача' },
      { edited: false, title: 'Вторая задача' },
      { edited: false, title: 'Третья задача' },
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
      let qwe = localStorage.getItem('tasks')
      // qwe.push(new)
      console.log(qwe);
      localStorage.setItem('tasks', JSON.stringify(newTask))
    },
    changeEdit(state, i) {
      state.tasks[i].edited = !state.tasks[i].edited
    },
    changeTitle(state, { i, newTitle }) {
      state.tasks[i].title = newTitle
    }
  },
})
