const Logreg = () => {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>
            Login
        </>
    );
}

export default Logreg;