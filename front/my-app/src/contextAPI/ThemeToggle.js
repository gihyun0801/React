// 테마를 토글하는 버튼 컴포넌트

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {

    // useContext Hook 을 사용하여 ThemeContext 의 값중 toggleTheme 을 가져옴 
    const { toggleTheme }  = useContext(ThemeContext); // light or dark
 
    // 버튼 클릭 시 toggleTheme 함수 호출

    return <button onClick={toggleTheme}>토글 버튼</button>;

    
}

export default ThemeToggle;