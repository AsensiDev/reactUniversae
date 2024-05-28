import "./Header.css";

export default function Header() {

    
    

    function cartWork() {

        var cartPopup = document.getElementById('cartPopup');
        var cartIcon = document.getElementById('cartIcon');

        if (cartPopup.style.display === 'block') {
            cartPopup.style.display = 'none';
        } else {
            cartPopup.style.display = 'block';
        }

        // Opcional: Cierra el popup si se hace clic fuera de él
        window.addEventListener('click', function(event) {
        if (!cartIcon.contains(event.target) && !cartPopup.contains(event.target)) {
            cartPopup.style.display = 'none';
        }
    });
    };

    

    return (
        <header className="d-flex justify-content-center w-100">
            <nav className="navbar navbar-expand-lg w-75">
                <div className="container-fluid w-100">
                    <a className="navbar-brand logo-box" href="/react-rick-and-morty/">
                        <img src="../../build/logo.webp" className="" alt="" />
                    </a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>

                    <div className=" offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> 
                        
                        <div className="offcanvas-body pt-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                                <li className="nav-item pt-1">
                                    <a className="nav-link active text-light fs-4" aria-current="page" href="/react-rick-and-morty/store">Tienda</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/comunity" >Preguntas</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/register" >Registrarse</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/login" >Iniciar sesión</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/miscursos" >Mis Cursos</a>
                                </li>

                                <li className="cart-container">
                                    <img src="build\carrito.png" id="cartIcon" class="cart-icon" alt="" onClick={cartWork} />
                                    <div className="cart-popup" id="cartPopup">El carrito está vacío</div>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}
