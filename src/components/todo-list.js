import React from 'react';
import { todoListState } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'
import { TodoItem } from './todo-item'
import { TodoItemCreator } from './todo-item-creator'
import { TodoListStats } from './todo-list-stats'
import { TodoListFilters } from './todo-filters-list'
 
export function ListaTodo () {
  const todoList = useRecoilValue(todoListState)
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      }
    </div>
  );
}