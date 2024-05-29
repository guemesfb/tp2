const $ = (id) => document.getElementById(id)
const validador = $("validador")
const listado = $("listado")
const mensaje = $("mensaje")

validador.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = $("nombre").value
    const apellido = $("apellido").value
    const edad = $("edad").value
    const altura = $("altura").value
    const email = $("email").value

    mensaje.style.color = "red"
    if (!nombre || !apellido || !edad || !altura || !email) {
        mensaje.innerText = "Por favor, rellene todos los campos."
        return
    }
    if (nombre.length >= 50) {
        mensaje.innerText = "El nombre no puede ser mayor a 50 caracteres."
        return
    }
    if (apellido.length >= 50) {
        mensaje.innerText = "El apellido no puede ser mayor a 50 caracteres."
        return
    }
    if (edad < 18) {
        if (edad < 0) {
            mensaje.innerText = "No se puede tener una edad negativa."
        } else {
            mensaje.innerText = "Debe ser mayor de edad."
        }
        return
    }
    if (altura < 0) {
        mensaje.innerText = "No se puede tener una altura negativa."
        return
    } else if (altura > 230) {
        mensaje.innerText = "La altura no puede ser mayor a 230 cm."
        return
    }
    if (!email.includes("@")) {
        mensaje.innerText = "Debe ser un correo electronico valido."
        return
    }

    mensaje.style.color = "green"
    mensaje.innerText = "Los datos han sido validados con exito."
})
