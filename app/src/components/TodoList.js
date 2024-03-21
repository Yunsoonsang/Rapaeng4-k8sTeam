import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {
        // todos는 객체 리터럴(JSON) 배열이었고 todo는 객체 리터럴!
        // 실제로 List를 출력하는 주체는 ListItem이기 때문에 데이터를 전달한다.
        todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} />
        ))
      }
    </div>
  );
};
 
export default TodoList;

