document.addEventListener("DOMContentLoaded", () => {
    const registro = document.getElementById("form-registro");
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (registro) {

        registro.addEventListener("submit", () => {
            const nombre = document.getElementById("reg-nombre").value;
            const username = document.getElementById("reg-username").value;
            const pass = document.getElementById("reg-pass").value;
            const rol = document.getElementById("reg-rol").value;

            const usuario = {
                nombre: nombre,
                usuario: username,
                rol:rol,
                password: pass
            }

            usuarios.push(usuario);

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Usuario ingreado");
        });
        
    }
})