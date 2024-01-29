/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas 

    Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo dele apareça



Objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuario clicar no botao de fechar, o conteúdo deve ser escondido

    Passo 1 - Verificar se o botão está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

const botao = document.querySelector(".btn-plataforma")
const elementosPlataformas = document.querySelector(".btn-plataforma .plataformas")


botao.addEventListener("click", () => {
     elementosPlataformas.classList.toggle("ativo");
});
    

    

