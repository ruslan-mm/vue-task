<template>
  <div class="container">
    <AddTaskForm />
    <ul>
      <li v-for="(task, i) in getTasks" :key="i">
        <span v-show="!task.edited">{{ task.title }}</span>
        <div v-show="task.edited" class="edit__block">
          <input v-model="newTitle" type="text">
          <button class="accept" @click="editTitle(i)">Accept</button>
          <button class="decline" @click="showEditInput(i)">Decline</button>
        </div>
        <button class="edit" v-show="!task.edited" @click="showEditInput(i)">Edit</button>
        <button class="delete" @click="removeItem(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AddTaskForm from '@/components/AddTaskForm.vue'
export default {
  data() {
    return {
      isShowEditInput: false,
      newTitle: ''
    }
  },
  components: { AddTaskForm },
  computed: {
    ...mapGetters(['allTasks']),
    getTasks() {
      // if (localStorage.tasks) {
      //   return JSON.parse(localStorage.getItem('tasks'))
      // } else {
        return this.allTasks
      }
    // }
  },
  methods: {
    ...mapMutations(['removeTask', 'changeEdit', 'changeTitle']),
    showEditInput(i) {
      this.changeEdit(i)
    },
    removeItem(i) {
      this.removeTask(i)
    },
    editTitle(i) {
      this.changeTitle({ i, newTitle: this.newTitle })
      this.showEditInput(i)
      this.newTitle = ''
    }
  },
}
</script>

<style scoped>
input {
  padding: 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
/* .container {
  display: flex;
  flex-direction: column;
} */
.edit__block {
  display: inline;
}

li {
  padding: 10px;
}

li span {
  padding: 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px;
  border-radius: 5px;
}

.edit {
  background-color: #d9e75f;
}

.delete {
  background-color: #f52727;
}
.accept {
  background-color: #2de73d;
}
.decline {
  background-color: #e75f5f;

}
</style>
