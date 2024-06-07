import { useState } from "react";

// 부모
function Exam5(){
    const [userData, setUserData] = useState({ name: '홍길동', age: 30 });

    // return <MyComponent name={userData.name} age={userData.age} />
    return <MyComponent {...userData} />;
}

export default Exam5;

// 자식
function MyComponent({ name, age }){
    const content = `제 이름은 ${name} , 나이는 ${age} 살 입니다.`;
    
    return <h3>{content}</h3>;
}




