let listaDeAmigos = [];

//função para adicionar cada nome digitado dentro do array
function adicionarAmigos(){
    let amigos = document.getElementById("amigo").value.trim();
    

    if(amigos === "" || /\d/.test(amigos)){
        alert("Por favor, insira um nome valido!");
    } else{
        if (amigos == listaDeAmigos[listaDeAmigos.length-1]){
            alert("Esse nome já foi adicionado!");
        } else {
            listaDeAmigos.push(amigos);
        }
    }
    atualizarListaAmigos();
    criarListaAmigos();
    limparCampoNomes();
}

//função para apagar o que foi digitado do campo de nomes
function limparCampoNomes(){
    amigos = document.getElementById("amigo");
    amigos.value = "";
}

//Exclui a lista anterior de nomes adicionar, para evitar cópias
function atualizarListaAmigos(){
        let listaNomes = document.getElementById("listaAmigos");
        listaNomes.innerHTML = "";
}

//função para mostrar todos os nomes adicionados ao array, criando <li> para cada um
function criarListaAmigos(){
    let contador = 0;
    while (contador < listaDeAmigos.length){
        let tag = document.createElement("li");
        let nomes = document.createTextNode(`${listaDeAmigos[contador]}`);

        tag.appendChild(nomes);

        let lista = document.getElementById("listaAmigos")
        lista.appendChild(tag);
        contador++;
    }
}

//escolhe um nome aleatório usando o numero aleatório gerado como indice
function sortearNomeAleatorio(){
    let indiceAleatorio = gerarNumeroAleatorio();
    let sorteado = document.getElementById("resultado");
    sorteado.innerHTML = `O ${listaDeAmigos[indiceAleatorio]} foi sorteado!`;
}

//função para gerar um número aleatório
function gerarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    return numeroAleatorio;
}



