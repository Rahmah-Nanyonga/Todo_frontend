import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputTodo from "./Components/InputTodo";
import Footer from "./Components/Footer";
import About from "./Components/About";
import TodoItem from "./Components/TodoItem";

function App() {
 

  return (
<Router>
  <Routes>
  <Route
          path="/"
          exact
          element={
            <div className="container">
              <h4 className="container_heading">My Todo App</h4>
              <InputTodo />
              <TodoItem />

              <Footer />
            </div>
          }
        ></Route>
        <Route path="/about" element={<About/>}></Route>
  </Routes>

     
</Router>
   
   
  );
}

export default App;
