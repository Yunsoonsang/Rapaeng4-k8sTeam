import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
 
const TodoInsert = ({onInsert}) => {
    // 삽입할 데이터를 저장할 state변수를 선언
    const [value, setValue] = useState('');

    // 마지막에 들어가 있는 [] = 관심사 변수로 여기서는 value가 관심사 변수다.
    // 관심있는 변수가 변했을 때만 수행하도록 하는 트리거
    // 그냥 함수 리터럴로 만들면 매번 onChange 이벤트가 발생하면 매번 실행해서 매우 비효율적이다.
    // 이를 유연하게 만드는 것이 useCallback이다. 정의문이 매번 실행되지 않도록 한다.
    // 겉으로는 티가 안나지만 시스템의 효율을 끌어올리는 문법이므로 useCallback 사용을 권장한다.
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            // 새로고침이 일어나면 방금 선행된 insert가 무시된다.
            // 이를 방지하기 위해 이 함수를 호출해서 새로고침을 막자.
            e.preventDefault();
        },
        [onInsert, value],
    );
 
    // input상자의 내용이 변경되었다.
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
        <input
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
        />
        <button type="submit">
            <MdAdd />
        </button>
        </form>
    );
    // 이제 데이터를 어떻게 전송해야 할까?
    // 자식은 부모를 함부로 접근하는 일은 없다. 그래서 이를 수행하는 주체는 부모인 App인 것이다.
    // App으로 가서 수정하자.
};
 
export default TodoInsert;