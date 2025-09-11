let amigos = [];

function adicionarAmigo (){
    let input = document.getElementById ('amigo');
    let nome = input.value.trim();

    if (nome === ''){
        window.alert ('Por favor, insira um nome!');
        return;
    } else if (amigos.includes(nome)){
        window.alert ('Esse nome já foi adicionado!');
    } else {
        amigos.push(nome);

        const listaAmigos = document.getElementById('listaAmigos');

        listaAmigos.innerHTML = '';

        for (let amigo of amigos) {
            listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
    input.value = '';
    input.focus();
    }
}
function sortearAmigo (){
    if (amigos.length < 3){
        window.alert ('Adicione pelo menos três amigos para sortear!');
        return;
    }
    let amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }
    let mensagem = 'Resultados do sorteio:\n';
    for (let i = 0; i < amigosEmbaralhados.length; i++){
        let sorteado = (i === amigosEmbaralhados.length - 1) 
        ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
        mensagem += `${amigosEmbaralhados[i]} tirou ${sorteado}\n`;
    }
    window.alert (mensagem);
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}
function limparLista (){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
        return;
}
