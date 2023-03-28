function ordenar(){
  const usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
  const frutas = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja'];
  const resultadoEsperado = [];

  frutas.reverse()

  for (let i = 0; i < usuarios.length; i++) {
    resultadoEsperado.push(`${usuarios[i]} - ${frutas[i]}`);
  }

  console.log(resultadoEsperado);

}

ordenar()