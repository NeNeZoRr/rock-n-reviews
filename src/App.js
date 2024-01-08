import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import User from "./views/user"
// import { Login } from "./Login";
// import { Register } from "./Register";


function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Router>
      <div className="App">
        {/* {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        } */}
        <Routes>
          <Route path='/user/:id' element={<User />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
