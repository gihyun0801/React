// Component 예제 1

import { Component } from "react";

/*

Component :
React 앱의 구성 요소로, 재사용이 가능하도록 만들어져 있으며
UI를 작은 조각으로 나누어 관리함.

컴포넌트 명은 보통 대문자로 작성함,

컴포넌트 아래와 같이 두가지로 나뉨.

1. 클래스형 컴포넌트 : React.Component 클래스를 상속받아 구현
2. 함수형 컴포넌트

State , props

React 컴포넌트는 두 종류의 데이터를 다룸

1. props(속성) : 부모 컴포넌트로부터 전달되는 읽기 전용 데이터
2. state(상태) : 컴포넌트의 내부에서 관리되며 컴포넌트의 동작 및 UI 렌더링을 제어하는데 사용
                (내부 상태를 관리하는데 사용되는 데이터)



*/

// 클래스형 컴포넌트



class Exam1 extends Component{ // prop : 부모에게 받은 속성
        // 컴포넌트 정의

        // 필드

        // 생성자
        constructor(prop){
            super(prop);
            this.state = { count : 0 }; 
             // state : 컴포넌트의 내부 상태를 관리하는데 사용되는 데이터
             // Count 는 Exam1 이라는 컴포넌트의 내부 상태 중 하나의 데이터이며,
             // 초기값이 0으로 설정됨,

        }
        // 메서드 ... (함수)
        handleClick = () => { // handle Click 이라는 이름의 함수를 정의함
            this.setState({ count : this.state.count + 1 });
        }
        // 이 컴포넌트의 상태(state)중 count를 현재 상태값에서 + 1 한 값으로 상태를 다시 세팅(변경)
 
         
        /*
        
        React에서 상태(State)와 변수(variable)은 둘 다 데이터 저장과 관련되어 있지만, 각기 다른 역할과 사용방식을 가짐.
        - 상태(state)는 React 컴포넌트에서 데이터가 저장되는 곳으로, 상태값이 변경될 때 마다 컴포넌트가 다시 렌더링된다.
        - 변수는 컴포넌트 내에서 상태가 아닌 다른 데이터를 저장하기 위에 사용되므로 변수값이 변경되어도 컴포넌트는 다시 렌더링되지 않는다.
        
        */  



        // render 함수 (클래스형 컴포넌트에서 필수 구문)
        render(){
            //클래스형 컴포넌트에서 render 함수 안에 return 구문을 필수로 작성해야한다.
            // return 에는 무엇을 렌더링할지 작성하면됨.

            return(
                    <div>
                        <h1>Count : {this.state.count}</h1>
                        <button onClick={this.handleClick}>증가</button>
                    </div>
            );
        };
        
}

export default Exam1;