<template>
    <div>
        <h3>TODO</h3>
        <ul>
            <li v-for="(todo, i) in todos" :key="i">{{ todo.text }} <button @click="remove(i)">X</button></li>
        </ul>
        <div class="input-group mb-3">
        <input  @keypress.enter="put"  v-model="text" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        </div>
    </div>
</template>
<script>
import { useTodos } from '@/store/todo'

const storeTodo = useTodos()

export default {
  // state
  data() {
    return {
      todos: storeTodo.todos,
      text: ''
    }
  },
  // actions
  methods: {
    remove(i) {
      storeTodo.removeTodo(i)
    },
    put() {
        if (this.text!='') {
            storeTodo.addTodo(this.text)
            this.text = ''
        }
    }
  }
}
</script>