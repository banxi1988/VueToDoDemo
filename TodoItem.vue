<template>
      <li class="todo-list-item" v-bind:class="{ active: todo.uiActive }">
        <span v-show="todo.done" class="done-marker" @click="markTodo">✓</span>
        <span v-show="!todo.done" class="todo-marker" @click="markDone">☐</span>
        <span class="content">{{todo.content}}</span>
        <button @click="deleteTodo">删除</button>
      </li>
</template>
<style>
    .done-marker,.todo-marker{font-size:1.3rem}
    .todo-list-item{ list-style: none;} 
    .todo-list-item.active{ background: #d1e1f1} 
</style>
<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"
import Todo from "./Todo"

@Component
export default class TodoItem extends Vue {
  @Prop()
  todo:Todo = new Todo("")

  markDone():void{
    this.todo.done = true
  }

  markTodo():void{
    this.todo.done = false
  }

  deleteTodo():void{
    this.$emit('deleteTodo')
  }
}
</script>
