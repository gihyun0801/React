// 3레벨 자식 컴포넌트

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemeChildComponent = () => {

    const {theme} = useContext(ThemeContext);

    const modeName = theme === 'light' ? '라이트' : '다크';

    return <h1>{modeName}테마 적용중이에요~</h1>;



}

export default ThemeChildComponent;