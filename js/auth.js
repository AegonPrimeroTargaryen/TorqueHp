document.addEventListener("DOMContentLoaded", () => {
    const sesion = JSON.parse(localStorage.getItem("sesion"));

    const nav = document.querySelector(".navbar-nav");

    let item = `<li class="nav-item" aria-current="index.html">
                    <a class="nav-link" href="index.html">Inicio</a>
                </li>`;

    if (!nav) return;    

    if(sesion?.logueado){
        if (sesion.rol === "admin") {
            item += `<li class="nav-item">
                        <a class="nav-link" href="admin.html">Administración</a>
                    </li>`
        }else {
            item += `<li class="nav-item">
                        <a class="nav-link" href="servicios.html">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cotizaciones.html">Cotizaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="nosotros.html">Sobre Nosotros</a>
                    </li>`
        }
        item += `<li class="nav-item">
                    <a class="nav-link" href="#" id="cerrar-sesion">Cerrar Sesión</a>
                </li>`;    
    } else {
        item += `<li class="nav-item">
                    <a class="nav-link" href="nosotros.html">Sobre Nosotros</a>
                </li>
                <li class="nav-item dropstart">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Iniciar Sesión</a>
                    <form id="form-login" class="dropdown-menu bg-dark form-login" aria-labelledby="navbarDropdown">
                        <h2 class="text-white h2-login">Login</h2>          
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" placeholder="name@example.com">
                            <label for="floatingInput">Usuario</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                        <div class="mt-3 d-flex justify-content-center">
                            <button class="btn btn-outline-primary" type="submit">Iniciar Sesión</button>
                        </div>
                    </form>
                </li>`
    }
    
    nav.innerHTML = item;

    const cerrarSesion = document.getElementById("cerrar-sesion");

    if (cerrarSesion) {
        cerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("sesion");
            window.location.href = "index.html";
        });
    }
})