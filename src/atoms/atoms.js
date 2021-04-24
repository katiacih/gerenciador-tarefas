import { atom, selector }  from 'recoil'

export const todoListState = atom({
  key: 'todListState',
  default: [],
})

/**Valores
 *default: mostrar tudo 
 mostrar concluidos
 mostrar incompletos
  */
export const todoListFilterState = atom({
  key: 'todoListFiltesState',
  default: 'mostra tudo',
})

export const filterTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch(filter) {
      case 'mostrar concluidos':
        return list.filter((item) => item.isComplete )
      case 'mostrar incompletos':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  }
})


export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalComplete = todoList.filter((item) => item.isComplete ).length
    const totalIncomplete = todoList.filter((item) => !item.isComplete).length
    const percentCompleted = totalNum === 0 ? 0 : totalComplete/ totalNum * 100

    return {
      totalNum,
      totalComplete,
      totalIncomplete,
      percentCompleted
    }
  }
})