let peso = 200

if(peso >100) {
    console.log("A peca possui um peso adequado, pode ser cadastrada")
} else {
    console.log ("A pecanao pode ser cadastrada, nao possui o peso minimo")
}

let listapecas = ["bateria","amortecedor","virabrequim","radiador","carter","ignicao","pastilha de freio","cabo de vela","rodas","vela"]

if (listapecas.length < 10) {
   console.log ("A lista ainda possui espaco para mais pecas") 
} else {
    console.log (" Nao ha espaco disponivel na lista, limite maximo atingido")
}
let nomePeca = ("Disco de freio")

if(nomePeca.length >3) {
    console.log ("Nome valido, pode seguir o cadastro")
} else {
    console.log ("Nome invalido, o nome da peca, deve ter mais de 3 caracteres")
}