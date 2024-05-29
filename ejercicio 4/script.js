const formulario = document.getElementById("calculadora")

formulario.onsubmit = (e) => {
    e.preventDefault()
    const estatura = document.getElementById("estatura").value
    const peso = document.getElementById("peso").value

    if (!estatura || !peso) {
        alert("Por favor, ingrese valores validos")
        return
    }

    if (estatura < 0 || peso < 0) {
        alert("No se pueden ingresar valores negativos")
        return
    }

    const imc = peso / (estatura * estatura)

    alert("IMC: " + imc)
}
