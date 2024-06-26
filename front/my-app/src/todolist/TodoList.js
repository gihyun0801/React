import { useState } from "react";

/*

        불변성(immutablility)을 유지해야함.
        : 데이터 구조 (ex, 배열, 객체)의 원본값을 변경할 수 없는 상황을 의미함.
        -> 불변성을 유지한다는 것은 한 번 설정된 초기값을 가진 데이터 구조를 직접 변경하지 않고,
        항상 새로운 데이터 구조를 생성해서 업데이트하는 것을 뜻함

        왜 ? React 는 상태변화가 일어날 때 효율적으로 컴포넌트를 리렌더링하기 때문
        상태의 불변성을 가정한다.
        불변성을 유지하면 이전 상태와 새로운 상태가 다르다는 것을 쉽게 알 수 있으며,
        이를 통해서 변경된 부분만 업데이트 할 수 있는 것.


*/

function TodoList(){


    // 상태
        const [todos, setTodos] = 
        useState([{title : "React 복습하기", isDone : false}, 
                {title : "일기쓰기", isDone : true}                
        ]);


        const [inputValue, setInputValue] = useState('');
        // const [todoss, setTodoss] =
        //  useState({title : "React 복습하기", isDone : false}, 
        //         {title : "일기쓰기", isDone : true}                
        // );
    // 함수
    // 할 일 추가 함수

           
        function handleAddTodo (){
            // 기존의 todos 배열과 새로훈 할 일 객체를 이어붙여서 새로운 배열을 만든 후,
            // 이를 setTodos 함수를 사용하여 업데이트함
            setTodos( [...todos , {title : inputValue , isDone : false}] );
            setInputValue('');
        }
     
        
    // 할 일 삭제 함수
    const handleDeleteTodo = (index) => {
        // 얕은 복사 방법 1번째 : slice() 이용 - 원본 배열을 변경하지 않고 , 새로운 배열을 반환
        const newTodos = todos.slice();
        
        newTodos.splice(index, 1);
        // splice() : 배열의 기존 요소를 삭제 [추가 또는 교체]
        // splice(start, deleteCount, [item1, item2 ..])
        // start : 배열에서 변경을 시작할 인덱스 
        // deleteCount : 배열에서 제거할 요소의 수 
        // index에서 1 개 짤라 내겠다.
        setTodos(newTodos);

    }    

    // 할일 토글 함수

    const handleToggleTodo = (index) => {

        // 얕은 복사 방법 2번째 : 전개(spread) 연산자
        // 배열이나 객체의 모든 요소를 개별적으로 펼쳐서 새로운 배열이나 객체를 생성할 때 사용

        const newTodos = [...todos ];

        // 해당 인덱스의 todo 항목의 isDone 이라는 걸 반전시켜줌

        newTodos[index].isDone = !newTodos[index].isDone;

        // 새로운 배열로 상태를 업데이트
        setTodos(newTodos);


    }
    // return () : 화면에 렌더링할 jsx 작성 구문
    return(
        <>
            <h1>Todo List</h1>
            <input value={inputValue} onChange={ (e) => setInputValue(e.target.value)   }/>
            <button onClick={handleAddTodo}>추가하기</button>

            <ul>
                 {
                    todos.map( (todo, index) => (
                        // {return () } 생략한 방법
                        // => 화살표 뒤에 () 소괄호를 작성하면 안에 return 구문 작성안해도됨
                        // => 화살표 뒤에 {} 중괄호를 작성하면 안에 return 구문 작성해야됨
                        <li>
                            <span style={ {textDecoration : todo.isDone ? 'line-through' : 'none' } }>{todo.title}</span>

                            <button onClick={ () => handleToggleTodo(index)  }>{todo.isDone ? '미완료' : '완료'}</button>
                            <button onClick={ () => handleDeleteTodo(index) }>삭제</button>
                        </li>
                    )) 
                 }
            </ul>
        </>

    );
}

export default TodoList;