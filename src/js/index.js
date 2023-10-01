// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcá-lo como selecionado
//passo 1.1 - pegar os botoes para verificar quando o usuário clica em um deles
const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - quando clicar no botão do personagem, mostrar as informações do personagem
//passo 2.1 - pegar os personagens para poder mostra ou esconder
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desselecionarBotao();

        //passo 1.2 - adicionar a classe 'selecionado' ao botão que o usuário clicou
        botao.classList.add('selecionado');

        desselecionarPersonagem();
    

        //passo 2.2 - adicionar a classe 'selecionado' no personagem que o usuário selecionou
        personagens[index].classList.add('selecionado');
    })
})

function desselecionarBotao() {
    //passo 1.3 - verificar se ja existe um botão selecionado, caso sim, remover a seleção dele
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function desselecionarPersonagem() {
    //passo 3.2 - verificar se ja existe um personagem selecionado, caso sim, remover a seleção dele
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}


