// ThemeComponent.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import './css/style.css';
// 현재 테마 상태에 따라 스타일을 적용하고 보여줄 컴포넌트

const ThemeComponent = () => {

   //useContext Hook 을 사용하여 ThemeContext의 값 중 theme 상태값 얻어로기
     const {theme} = useContext(ThemeContext);

     // 현재 테마에 따라 클래스 이름 설정

     const themeStyle = theme === 'light' ? 'light-theme' : 'dark-theme';
    return (
 
          <>
                <div className={themeStyle}>
                    현재 ~ {theme}테마를 적용 중 입니다
                </div>
          </>

    );
}

export default ThemeComponent;