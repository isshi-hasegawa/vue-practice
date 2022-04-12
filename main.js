new Vue({
  el: '#app',
  data () {
    return {
      newItem: '',
      todos: []
    }
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  methods: {
    addItem: function() {
      if(this.newItem === '') return
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.newItem = ''
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    checkedItem: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  }
})
