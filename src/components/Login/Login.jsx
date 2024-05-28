import "./Login.css";

export default function Login() {

    return (
        <div className="register">
            <form>
                <h2 className="text-center">Iniciar Sesion</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email"
                        className="form-control" id="inpt" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password"
                        className="form-control" id="inut" />
                </div>
                <button type="submit" className="btn">Enviar</button>
                <div className="d-flex gap-2">
                    <p>¿No tienes una cuenta?</p>
                    <a href="/react-rick-and-morty/register">Registrarse</a>
                </div>
            </form>
        </div>
    );
}
