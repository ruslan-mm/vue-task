<template>
  <div class="container">
    <AddTaskForm />
    <ul>
      <li v-for="(task, i) in allTasks" :key="i">
        <span v-show="!task.edited">{{ task.title }}</span>
        <div v-show="task.edited" class="edit__block">
          <input v-model="newTitle" type="text">
          <button @click="editTitle(i)">accept</button>
          <button @click="showEditInput(i)">decline</button>
        </div>
        <button v-show="!task.edited" @click="showEditInput(i)">edit</button>
        <button @click="removeItem(i)">del</button>
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
  computed: mapGetters(['allTasks']),
  methods: {
    ...mapMutations(['removeTask', 'changeEdit', 'changeTitle']),
    showEditInput(i) {
      this.changeEdit(i)
    },
    removeItem(i) {
      this.removeTask(i)
    },
    editTitle(i) {
      this.changeTitle(i, {
        title: this.newTitle,
        edited: false
      })
      this.showEditInput(i)
    }
  }
}
</script>

<style>
  .edit__block {
    display: inline;
  }
</style>
