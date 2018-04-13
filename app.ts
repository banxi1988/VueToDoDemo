import Vue from "vue"
import Component from "vue-class-component"

class Todo{
  content: string
  created: Date
  done = false 

  constructor(content:string){
    this.content = content
    this.created = new Date()
  }


}

@Component
class App extends Vue{
  newTodoText = ''
  todos :Array<Todo> = []
  hideCompletedTodos = false
  visitCount = 0
  error:any = null

  create():void{
    const content = this.newTodoText.trim()
    if(content.length  < 1){
      this.error = "待办事项不能为空"
      return
    }
    const todo = new Todo(content)
    this.todos.push(todo)
    this.newTodoText = ""
  }

  clearError():void{
    this.error = null
  }

  markDone(todo:Todo):void{
    todo.done = true
  }

  markTodo(todo:Todo):void{
    todo.done = false
  }
}

const app = new App({ el: '#app', })