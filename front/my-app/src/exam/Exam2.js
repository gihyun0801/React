// Component 예제 2

import { useState } from "react";

// 함수형 컴포넌트

function Exam2(){
        // 함수형 컴포넌트에서 상태를 사용하는 방법

        const [name, setName] = useState ('기현');
        const handleClick = () =>{
                setName("시온");
        }
        return(
                <div>
                    <h1>Hello, {name}</h1>
                    <button onClick={handleClick}>변경</button>
                </div>
        );
}

export default Exam2;