import "./Login.scss"
import loginImage from "../../assests/secure.svg"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { Link } from "react-router-dom"
import { instance } from "../../api/axios"
import { useState, useRef } from "react"
import { toast } from "react-toastify"
import { AiOutlineLoading } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef()
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)
    const [isPasswordOpen, setIsPasswordOpen] = useState(false)

    const handleEyeClick = () => {
        setIsPasswordOpen(!isPasswordOpen);
    }

    function loginUser(e){
        e.preventDefault()
        setIsLoading(true)
        instance.post('/auth/login', {
            username,
            password
        }).then(response => {
            if(response.data.token){
                setIsLoading(false)
                toast.success("Вы успешно вошли в систему!")
                setPassword("")
                setUsername("")
                dispatch({payload: response.data, type: "LOGIN_USER"})
                navigate('/admin')
            }
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            toast.error(err.response.data.message)
            setPassword("")
            setUsername("")
        })
    }

    return (
        <div className="login">
            <div className="login-main">
                <h1>Войти</h1>
                <form ref={formRef} onSubmit={loginUser}>
                    <input autoComplete="username" type="text" placeholder="Введите имя пользователя" required minLength={8} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <div className="password-wrapper">
                        <input autoComplete="current-password" typeof={isPasswordOpen ? "text" : "password"} type={isPasswordOpen ? "text" : "password"} placeholder="Введите пароль пользователя" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        { isPasswordOpen ? <FiEyeOff onClick={handleEyeClick}/> : <FiEye onClick={handleEyeClick}/>}    
                    </div>
                    <button disabled={isLoading ? true : false}> {isLoading ? <AiOutlineLoading className="loading-icon"/> : <></>} {isLoading ? "Загрузка" : "Войти"}</button>
                    <Link to={'/'}>Главный</Link>
                </form>
            </div>
            <div className="login-image">
                <img src={loginImage} alt="" />
            </div>
        </div>
    )
}

export default Login
