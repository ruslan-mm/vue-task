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
            if (this.title) {
                this.addTask({ title: this.title, edited: false })
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    width: 20%;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
}

button {
    background-color: #07b178;
    padding: 15px;
    border-radius: 10px;
}
</style>