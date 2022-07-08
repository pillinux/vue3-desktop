<template>
    <div>
        <h3>TODO</h3>
        <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
        </ul>
        <div class="input-group mb-3">
        <input v-model="text" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="put" class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
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
    put: function() {
        if (this.text!='') {
            storeTodo.addTodo(this.text)
        }
    }
  }
}
</script>