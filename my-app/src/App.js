// import logo from './logo.svg';
import './App.css';
// import Exam1 from './exam/Exam1.js';
// import Exam2 from './exam/Exam2.js';
// import Exam3 from './exam/Exam3.js';
// import Exam4 from './exam/Exam4.js';
// import Exam5 from './exam/Exam5.js';
// import Exam6_1 ,{Exam6_2, Exam6_3} from './exam/Exam6.js';
import { ThemeProvider } from './contextAPI/ThemeContext.js';
import ThemeToggle from './contextAPI/ThemeToggle.js';
import ThemeComponent from './contextAPI/ThemeComponent.js';
import TodoList from './todolist/TodoList.js';



function App() {
  return (
    // {여러가지 컴포넌트 부르기}
   <div className='App'>
      {/* <Exam1 /> */}
      {/* <Exam2 /> */}
      {/* <Exam3 /> */}
      {/* <Exam4 /> */}
      {/* <Exam5 /> */}
      {/* <Exam6_1 isLogin={true}/> */}
      {/* <Exam6_2 /> */}
      {/* <Exam6_3 label="클릭해보세요"/> */}
      {/* <ThemeProvider>
          <ThemeToggle />
          <ThemeComponent/>
      </ThemeProvider> */}
      <TodoList/>
   </div>
  );
}

export default App;
