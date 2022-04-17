const todoStorage = {
  getStorage: () => {
    return JSON.parse(localStorage.getItem('todos')) || []
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
      isEditable: false,
      editingItemIndex: null,
      todos: []
    }
  },
  mounted () {
    this.todos = todoStorage.getStorage()
  },
  methods: {
    addItem: function () {
      if (this.newItem === '') return
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      todoStorage.setStorage(this.todos)
      this.newItem = ''
    },
    updateItem: function () {
      if (this.newItem === '') return
      this.todos[this.editingItemIndex].item = this.newItem
      todoStorage.setStorage(this.todos)
      this.newItem = ''
      this.isEditable = false
    },
    editItem: function (index) {
      this.newItem = this.todos[index].item
      this.editingItemIndex = index
      this.isEditable = true
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1)
      todoStorage.setStorage(this.todos)
    },
    checkedItem: function () {
      todoStorage.setStorage(this.todos)
    }
  }
})
