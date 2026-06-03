const inputTexto = document.getElementById("input");
const btnAnalizar = document.getElementById("btn");
const resultadoTextoLetras = document.getElementById("resultado");

const contarVocalesYConsonantes = (cadena) => {
    if (typeof cadena !== "string" || cadena.trim() === "") {
        return "Por favor, ingrese una cadena de texto válida.";
    }

    const texto = cadena.toLowerCase();

    const vocalesEncontradas = texto.match(/[aáeéiíoóuúü]/g);
    
    const consonantesEncontradas = texto.match(/[bcdfghjklmnñpqrstvwxyz]/g);

    const numeroVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;
    const numeroConsonantes = consonantesEncontradas ? consonantesEncontradas.length : 0;
    //////////////////////////////////////////////////////////////////////////////////////
    //let numeroVocales = 0;
        //if (vocalesEncontradas !== null) {
        //numeroVocales = vocalesEncontradas.length;
    //}
    //else {
    //numeroVocales = 0;
    //}

    //let numeroConsonantes = 0;
    //if (consonantesEncontradas !== null) {
    //   numeroConsonantes = consonantesEncontradas.length;
    //} 
    //else {
    //   numeroConsonantes = 0;
    //}
    /////////////////////////////////////////////////////////////////////////////////
    return `Vocales: ${numeroVocales}, Consonantes: ${numeroConsonantes}`;
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
