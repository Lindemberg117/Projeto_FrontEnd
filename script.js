document.getElementById('botao').addEventListener('click', () => {
    document.getElementById('texto').innerText = 'Olá, aqui é o Lindemberg';

    const textoOriginal = document.getElementById('texto').innerText; // Armazena o texto original

    document.getElementById('botao').addEventListener('click', () => {
        const elementoTexto = document.getElementById('texto');

        // Alterna entre o texto original e o novo texto
        if (elementoTexto.innerText === textoOriginal) {
            elementoTexto.innerText = 'Olá, aqui é o Lindemberg';
        } else {
            elementoTexto.innerText = textoOriginal;
        }
    });
})

//Alternar para resumo ou texto completo.
document.getElementById('toggleResumo').addEventListener('click', () => {
    let resumo = document.querySelector('.resumo');
    let textoCompleto = document.querySelector('.texto_completo');

    if (resumo.style.display === 'none') {
        resumo.style.display = 'block';
        textoCompleto.style.display = 'none';
    } else {
        resumo.style.display = 'none';
        textoCompleto.style.display = 'block';
    }

})

//Array de projeto

const projetos = [{
        titulo: 'Calculadora Simples',
        descricao: 'Uma calculadora básica em Javascript.'
    },
    {
        titulo: 'Página Portifólio',
        descricao: 'Um layout básico para portifólio.'
    }
]

//função para exibir projetos
function exibirProjetos() {
    const listaProjetos = document.getElementById('lista-projetos');

    projetos.forEach(projeto => {
        const item = document.createElement('li');
        item.innerHTML = `<strong> ${projeto.titulo}</strong>: ${projeto.descricao}`
        listaProjetos.appendChild(item);
    })
}

exibirProjetos();

//botão de exibir Projetos

/*document.getElementById('toggleProjetos'), addEventListener('click', () => {
    const listaProjetos = document.querySelector('.projetos');
    if (listaProjetos.style.display === 'none' || listaProjetos.style.display === '') {
        listaProjetos.style.display = 'block';
    } else {
        listaProjetos.style.display = 'none';
    }
})*/


//Exibir Menu
document.getElementById('toggleMenu').addEventListener('click', () => {
    const menuLateral = document.getElementById('menuLateral');
    if (menuLateral.style.display === 'none' || menuLateral.style.display === '') {
        menuLateral.style.display = 'block'; // Mostra o menu
    } else {
        menuLateral.style.display = 'none'; // Esconde o menu
    }
});


//Eventos do mouse

const caixa =  document.getElementById('caixa');

caixa.addEventListener('mouseover', () => {
    caixa.style.backgroundColor = 'green';
});

caixa.addEventListener('mouseout', () => {
    caixa.style.backgroundColor = 'red';
});

//adicionar novo elemento

const lista =  document.getElementById('lista-projeto')
const novoProjeto = document.getElementById('li')

novoProjeto.textContent =  'Novo Projeto: Aprendendo Javascript.'
lista.appendChild(novoProjeto);


//removendo elemento

const itemParaRemover = documnet.querySelector('li')
lista.removeChild(itemParaRemover)


//formulario 

document.getElementById('form-contato').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').velue;
    alert(`Olá, ${nome}! Seu formulario foi enviado. `)
})

//Menu escondido
/*
const toggleMenu = document.getElementById('toggleMenu');
const menuLateral = document.getElementById('menuLateral');

toggleButton.addEventListener('click', () => {
    if(menuLateral.style.left === '0px'){
        menuLateral.style.letf = '-220px';
        toggleMenu.innerText = 'Mostrar Menu';
    }else{
        menuLateral.style.left = '0px';
        toggleButton.innerText = 'Esconder Menu'
    }
})
*/

const menuLateral = document.getElementById('menuLateral');
const toggleButton = document.getElementById('toggleMenu');

toggleButton.addEventListener('click', () => {
    if (menuLateral.style.left === '-220px') {
        menuLateral.style.left = '0';
    } else {
        menuLateral.style.left = '-220px';
    }
});