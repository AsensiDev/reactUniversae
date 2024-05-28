import "./Comunity.css";


export default function Comentarios() {

    return (
        <div className="Comentarios">
            <form>
                <h2 className="text-center">Deje sus preguntas</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email"
                        className="form-control" id="input" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputComentario1" className="form-label">Comentario</label>
                    <input type="text"
                        className="form-control" id="input" />
                </div>
                <button type="submit" className="btn">Enviar</button>
                <div className="d-flex gap-2">
                    <p>¿Tienes una cuenta?</p>
                    <a href="/react-rick-and-morty/register">Registrarse</a>
                </div>
            </form>

            <section className="seccion">

    <div className="Preguntas">
        <h2>Preguntas frecuentes</h2>
        <h3>Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae excepturi temporibus, ad explicabo, neque nihil culpa aliquid, voluptas veritatis corrupti laboriosam. Perferendis atque possimus beatae ratione provident iure repellendus.</p>

        <h3>Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae excepturi temporibus, ad explicabo, neque nihil culpa aliquid, voluptas veritatis corrupti laboriosam. Perferendis atque possimus beatae ratione provident iure repellendus.</p>
    
        <h3>Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae excepturi temporibus, ad explicabo, neque nihil culpa aliquid, voluptas veritatis corrupti laboriosam. Perferendis atque possimus beatae ratione provident iure repellendus.</p>
    
        <h3>Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae excepturi temporibus, ad explicabo, neque nihil culpa aliquid, voluptas veritatis corrupti laboriosam. Perferendis atque possimus beatae ratione provident iure repellendus.</p>

        <h3>Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae excepturi temporibus, ad explicabo, neque nihil culpa aliquid, voluptas veritatis corrupti laboriosam. Perferendis atque possimus beatae ratione provident iure repellendus.</p>
    </div>
</section>
        </div>
    ); 
}

 
 