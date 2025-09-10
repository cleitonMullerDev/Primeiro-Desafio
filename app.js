let amigos = [];

function inserirAmigos (){
    let input = document.getElementById ('amigo');
    let nome = input.value.trim();

    if (nome === ''){
        window.alert ('Por favor, insira um nome!');
    } else if (amigos.includes(nome)){
        window.alert ('Esse nome já foi adicionado!');
    } else {
        amigos.push(nome);
        input.value = '';
    }
}