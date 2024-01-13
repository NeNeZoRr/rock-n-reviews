import React from "react"
import Login from "./Login"
import Register from "./Register"
import { type } from "os"

const Logreg = () => {
    const [fromType, setFormType] = React.useState('login')

    const handleFormSwitch = (type) => {
        setFormType(type)
    }

    return (
        <div>
            {formType === 'login' ? (
            <Login onFormSwitch={handleFormSwitch} />
            ) : (
                <Register onFormSwitch={handleFormSwitch} />
            )}
        </div>
    )
}

export default Logreg