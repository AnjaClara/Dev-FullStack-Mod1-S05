function contarVogais(palavra) {
  if (typeof palavra !== "string") {
    return "Erro: o valor enviado não é uma string.";
  }

  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      contador++;
    }
  }

  if (contador === 0) {
    return "A palavra não contém nenhuma vogal.";
  } else {
    return contador;
  }
}

console.log(contarVogais("Olá, mundo!")); 
console.log(contarVogais("da")); 
console.log(contarVogais("JavaScript"));
console.log(contarVogais("Rhythm")); 
console.log(contarVogais(123)); 
