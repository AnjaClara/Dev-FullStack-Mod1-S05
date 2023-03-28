function filtraDados(){
  const dados = [

    {nome: "luis", idade: 26},
    
    {nome: "norma", idade: 16},
    
    {nome: "daiana", idade: 26},
    
    {nome: "jorge", idade: 16},
    
    {nome: "kauan", idade: 16},
    
    {nome: "charles", idade: 26},
    
    {nome: "marco", idade: 16},
    
    {nome: "bruno", idade: 16}
    
    ];

  const menoresDeIdade = dados.filter((menor)=>{
    if(menor.idade < 18){
      return menor
    }
  })

  console.log("Os menores de idade são: ", menoresDeIdade);

  const maioresDeIdade = dados.filter((maior)=>{
    if(maior.idade >= 18){
      return maior
    }
  })

  console.log("\nOs maiores de idade são: ", maioresDeIdade);
}
filtraDados()