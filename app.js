// Função para exibir a lista de sugestões
function mostrarSugestoes() {
    let listaSugestoes = document.getElementById("lista-sugestoes");
    let sugestoesSection = document.getElementById("sugestoes");

    // Limpa o conteúdo da lista de sugestões
    listaSugestoes.innerHTML = '';

    // Adiciona cada título de brincadeira à lista
    dados.forEach(dado => {
        let li = document.createElement("li");
        li.textContent = dado.titulo;
        listaSugestoes.appendChild(li);
    });

    // Exibe a seção de sugestões
    sugestoesSection.style.display = 'block';
}

// Função para pesquisar brincadeiras
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); // Adiciona trim e toLowerCase para pesquisa mais robusta

    // Limpa o conteúdo existente da seção de resultados
    section.innerHTML = '';

    // Variável para verificar se algum item foi encontrado
    let encontrouResultado = false;

    // Verifica se a seção foi encontrada
    if (section) {
        // Itera sobre cada item de dado
        for (let dado of dados) {
            // Verifica se o título ou a descrição contêm o texto de pesquisa
            if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.Como_brincar.toLowerCase().includes(campoPesquisa)) {
                // Marca que encontrou pelo menos um resultado
                encontrouResultado = true;

                // Cria um novo elemento div para cada item e adiciona as informações
                section.innerHTML += `
                    <div class="item-resultado">
                      <h2>${dado.titulo}</h2>
                      <p class="descricao-meta">
                        ${dado.Como_brincar}
                        <ul>
                          <li>Benefícios:</li>
                          <p>${dado.beneficios}</p>
                          <li>Variações:</li>
                          <p>${dado.variacoes}</p>
                        </ul>
                      </p>
                      <a href="${dado.link}" target="_blank">Saiba mais</a>
                    </div>
                `;
            }
        }

        // Se nenhum resultado foi encontrado, exibe uma mensagem
        if (!encontrouResultado) {
            section.innerHTML = '<p>Nada encontrado para a pesquisa.</p>';
        }
    }

    // Oculta a seção de sugestões ao pesquisar
    document.getElementById("sugestoes").style.display = 'none';
}

// Exibe a lista de sugestões quando a página é carregada
window.onload = mostrarSugestoes;
