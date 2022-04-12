const todoStorage = {
  getStorage: () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  },
  setStorage: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

new Vue({
  el: '#app',
  data () {
    return {
      newItem: '',
      todos: []
    }
  },
  mounted () {
    this.todos = todoStorage.getStorage()
  },
  methods: {
    addItem: function() {
      if(this.newItem === '') return
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      todoStorage.setStorage(this.todos)
      this.newItem = ''
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
      todoStorage.setStorage(this.todos)
    },
    checkedItem: function() {
      todoStorage.setStorage(this.todos)
    },
  }
})
