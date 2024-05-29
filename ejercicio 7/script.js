const $ = (id) => document.getElementById(id)
const usuarios = $("usuarios")
const tareas = $("tareas")

const obtenerDatos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if (res.ok) {
        const data = await res.json()

        data.forEach((usuario) => {
            const item = document.createElement("li")
            const boton = btnVerTareas(usuario.id, usuario.name)
            item.innerHTML = `${usuario.id} - ${usuario.name} - ${usuario.username} - ${usuario.email} - `
            item.appendChild(boton)
            usuarios.appendChild(item)
        })
    }
}

const btnVerTareas = (userId, userName) => {
    const btn = document.createElement("button")
    btn.innerHTML = "Ver tareas"
    btn.addEventListener("click", async () => {
        const btnCerrar = document.createElement("button")
        btnCerrar.innerHTML = "Cerrar"
        btnCerrar.addEventListener("click", () => {
            tareas.classList.add("oculto")
            tareas.innerHTML = ""
        })
        tareas.innerHTML = `<h2>Tareas de ${userName}</h2>`
        tareas.appendChild(btnCerrar)

        tareas.classList.remove("oculto")
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        )
        if (res.ok) {
            const data = await res.json()
            data.forEach((tarea) => {
                const span = document.createElement("span")
                const item = document.createElement("li")

                span.innerHTML = tarea.completed ? "✅" : "❌"
                item.innerHTML = `${tarea.id} - ${tarea.title} - ${span.innerHTML}`
                tareas.appendChild(item)
            })
        }
    })

    return btn
}

obtenerDatos()
