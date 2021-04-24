import React from 'react';
import { todoListStatsState } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'
 
export function TodoListStats () {
  const { totalNum, totalComplete, totalIncomplete, percentCompleted } = useRecoilValue( todoListStatsState )

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Total concluído: {totalComplete}</li>
      <li>Total não concluído: {totalIncomplete}</li>
      <li>Percentual concluído: {formattedPercentCompleted}</li>
    </ul>
  );
}