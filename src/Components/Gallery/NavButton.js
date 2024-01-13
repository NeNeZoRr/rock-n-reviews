import { useNavigate } from "react-router-dom"

const NavButtons = () => {
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            |
            <button onClick={() => navigate('/')}>home</button>
        </div>
    )
}

export default NavButtons