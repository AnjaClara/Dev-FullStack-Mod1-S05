
function procuraRepetidos() {
  const lista = ['Pedro','José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];

  const listaSemRepetidos = lista.filter((nome, index)  => lista.indexOf(nome) === index);
  const nomesRepetidos = lista.filter((nome, index) => lista.indexOf(nome) !== index);
  
  console.log(`${nomesRepetidos} [${listaSemRepetidos}]`);

}

procuraRepetidos();