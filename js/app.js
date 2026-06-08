const inputTexto = document.getElementById("input");
const btnAnalizar = document.getElementById("btn");
const resultadoTextoLetras = document.getElementById("resultado");

const contarVocalesYConsonantes = (cadena) => {
    let resultado = ""; 

    if (typeof cadena !== "string" || cadena.trim() === "") {
        resultado = "Por favor, ingrese una cadena de texto válida.";
    } else {
        const texto = cadena.toLowerCase();

        const vocalesEncontradas = texto.match(/[aáeéiíoóuúü]/g);
        const consonantesEncontradas = texto.match(/[bcdfghjklmnñpqrstvwxyz]/g);

        const numeroVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;
        const numeroConsonantes = consonantesEncontradas ? consonantesEncontradas.length : 0;
        
        resultado = `Vocales: ${numeroVocales}, Consonantes: ${numeroConsonantes}`;
    }

    return resultado; 
};

btnAnalizar.addEventListener("click", () => {
    const valorTexto = inputTexto.value; 

    if (valorTexto.trim() === "") {
        resultadoTextoLetras.textContent = "Por favor, escriba algo en el campo de texto.";
        return;
    }

    const resultadoTextoFinal = contarVocalesYConsonantes(valorTexto);

    resultadoTextoLetras.textContent = resultadoTextoFinal;

    inputTexto.value = "";
    inputTexto.focus();
});
