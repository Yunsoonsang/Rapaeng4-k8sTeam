import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
 
const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
 
  // cn("클래스", "조건속성") false면 checkbox가 checkbox가 미적용되고
  // true니까 checkbox가 적용이 될 것이다.
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
 
export default TodoListItem;