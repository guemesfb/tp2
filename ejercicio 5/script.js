const calculadora = document.getElementById("calculadora")
const resultado = document.getElementById("resultado")

calculadora.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = parseFloat(document.getElementById("ladoA").value)
    const ladoB = parseFloat(document.getElementById("ladoB").value)
    const ladoC = parseFloat(document.getElementById("ladoC").value)

    if (!ladoA || !ladoB || !ladoC) {
        alert("Por favor, ingrese valores válidos.")
        return
    }

    if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
        alert("Por favor, ingrese valores positivos.")
        return
    }

    if (ladoA < ladoC) {
        alert("El lado A debe ser mayor al lado C")
        return
    }

    const area = ((ladoA - ladoC) * ladoB) / 2 + ladoB * ladoC

    alert("Area del terreno: " + area)
})
