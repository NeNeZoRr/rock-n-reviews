import { useState } from "react";
import '../App.css';
import Login from "./Login";
import { Register } from "./Register";


const Logreg = () => {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (  
        <div>
        {
            currentForm === 'login'? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        </div>
    );
}

export default Logreg;