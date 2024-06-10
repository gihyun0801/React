// JSX(Javascript xml ) 사용하기

function Exam6_1(props){

    const isLogin = props.isLogin; // 부모에게 전달받은 props 중에 isLogin 을 isLogin 이라는 변수에 담은거
    // isLogin = 현재 true

    // if(isLogin){
    //     return <h1>Welcome back!</h1>
    // }else{
    //     return <h1>Please sign up~!</h1>
    // }


    return (
        // 렌더링 시 조건문
        // if /else 지향
        // -> 삼항연산자
        // 조건문 ? true 일때 값 : false 일때 값

        isLogin ? <h1>Welcome back !</h1> : <h1>Please sign up~!</h1>

    );

}

// 반복문

// map 사용법
export function Exam6_2(){
    //map : 배열에서 사용하는 js 내장 함수
    // -> 배열의 모든 요소에 대해 주어진 함수를 호출하고
    // 결과를 새로운 배열로 반환
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map( (number) =>  <li>{number}</li> );
    // [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>, ]

    return <ul>{listItems}</ul>
}

// 이벤트 만들기(처리하기)

export function Exam6_3(props){

    const handleCheck = () => {
        alert("버튼 클릭됨");
    }


        return (

            <button onClick={handleCheck}>{props.label}</button>

        )

}


export default Exam6_1; // 기본적으로 내보내는 컴포넌트가 Exam6_1 이다