import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {
  // 꼭 state타입의 변수를 선언해야 한다. 데이터는 언제나 갱신되고 업데이트 해야 하니까.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id. 3까지 있으니까 4부터 시작.
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text, // text: text, 자동매칭 가능
        checked: false,
      };
      setTodos(todos.concat(todo)); // concat안쓰고 그냥 todo를 set하면 기존데이터를 들여써버리겠죠?
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // 이걸 어떻게 호출해야 할까?
  // Insert 컴포넌트에게 함수 리터럴을 전달하여 자식이 호출하도록 한다.
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
};

export default App;