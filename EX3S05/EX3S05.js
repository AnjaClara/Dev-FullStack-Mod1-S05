function adicionar(...valores){
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
  let error = false;

  valores.forEach((valor)=>{
    if(typeof valor !== 'string'){
      error = true;
      console.log("Apenas strings podem ser inseridas");
    }else if(lista.includes(valor)){
      error = true;
      console.log(`Esse nome (${valor}) já está na lista.`)
    }else{
      lista.push(valor);
    }
  })

  if(error === false){
    console.log(`Lista com novos nomes: ${lista}`);
  }
}

adicionar("Ana", "Clara", "João");
adicionar(1, "Ana");
adicionar("Danili","Pedro");