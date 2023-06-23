<template>
    <form @submit.prevent="submit">
        <input type="text" v-model="title">
        <button type="submit">Add task</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        submit() {
            this.addTask({title: this.title, edited: false})
            this.title = ''
        }
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 20%;
}
input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>