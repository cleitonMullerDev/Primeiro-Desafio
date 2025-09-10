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

        for (let i = amigos.length - 1; i >= 0; i--){
            listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;

}
        input.value = '';
        input.focus();
    }
}
