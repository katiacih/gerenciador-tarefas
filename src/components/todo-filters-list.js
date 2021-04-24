import React from 'react';
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../atoms/atoms';
 
export function TodoListFilters () {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({target: { value }}) => {
    setFilter(value)
  }

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="mostrar tudo">Mostrar Tudo</option>
        <option value="mostrar completos">Mostrar Completos</option>
        <option value="mostrar incompletos">Mostrar Incompletos</option>
      </select>
    </div>
  );
}