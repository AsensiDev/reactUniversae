import "./Register.css";
import { useState } from "react";
import loginService from "../../services/login";

export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user= await loginService.login({
                username,
                password
            })
    
            setUser(user)
            setUsername('')
            setPassword('')
        } catch(e) {
            setErrorMessage('Credenciales inválidas')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }

    }

    return (
        <div className="register">
            <form onClick={handleLogin}>
                <h2 className="text-center">Registrarse</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input 
                        type="text"
                        value={username}
                        name="Username"
                        placeholder="Username"
                        onChange={({target}) => setUsername(target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input 
                        type="password"
                        value={password}
                        name="Password"
                        placeholder="Password"
                        onChange={({target}) => setPassword(target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" id="submitBtn">Registrarse</button>
                <div className="d-flex gap-2">
                    <p>¿Ya tienes una cuenta?</p>
                    <a href="/react-rick-and-morty/login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    );
}
