// Prevod stupnu Fahrenheita na stupne celsia

const stupneF = Number(prompt("Zadej teplotu ve stupních Fahrenheita"))

const stupneC = 5*(stupneF-32)/9

document.body.innerHTML = "Převod na stupně Celsia je: " + stupneC + " °C"