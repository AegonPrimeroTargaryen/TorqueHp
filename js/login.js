document.addEventListener("DOMContentLoaded", () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existeUsuario = usuarios.some(user => user.usuario === "admin");

    if (!existeUsuario) {
        const admin = {
            nombre: "Administrador",
            usuario: "admin",
            rol:"admin",
            password: "admin123"
        }    
        usuarios.push(admin);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));      
    }    
});

function login(username, password) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(user => user.usuario === username && user.password === password);

    if (usuario) {
        const sesion = {
            logueado: true,
            usuario: usuario.usuario,
            rol: usuario.rol
        }

        localStorage.setItem("sesion", JSON.stringify(sesion));

        window.location.href = "index.html";
    } else {
        const formLogin = document.getElementById("form-login");const navBar = document.getElementById("navbarDropdown");
        navBar.ariaExpanded = true;
        navBar.classList.add("show")
        formLogin.classList.add("show")
        formLogin.setAttribute("data-bs-popper","none")
        alert("Usuario y/o Contraseña incorrectas");
    }
}


document.addEventListener("DOMContentLoaded", () => {

  const formLogin = document.getElementById("form-login");

  if (formLogin) {

    formLogin.addEventListener("submit", function (e) {
        
        e.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (username && password) {
            login(username, password);
        } else {
            const navBar = document.getElementById("navbarDropdown");
            navBar.ariaExpanded = true;
            navBar.classList.add("show")
            formLogin.classList.add("show")
            formLogin.setAttribute("data-bs-popper","none")
            alert("Completa todos los campos.");
        }
    });
  }
});