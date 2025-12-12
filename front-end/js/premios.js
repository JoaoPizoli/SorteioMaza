const API_URL = 'https://192.168.20.17:4001/api';

// Elementos DOM
const formPremio = document.getElementById('formPremio');
const nomePremio = document.getElementById('nomePremio');
const quantidadePremio = document.getElementById('quantidadePremio');
const tabelaPremios = document.getElementById('tabelaPremios');
const tabelaPremiosSorteados = document.getElementById('tabelaPremiosSorteados');
const cardPremiosSorteados = document.getElementById('cardPremiosSorteados');
const contadorSorteados = document.getElementById('contadorSorteados');
const totalPremios = document.getElementById('totalPremios');
const premiosDisponiveis = document.getElementById('premiosDisponiveis');
const premiosSorteadosEl = document.getElementById('premiosSorteados');
const contadorPremios = document.getElementById('contadorPremios');

// Variáveis de estado
let premios = [];

// ================================
// Inicialização
// ================================
document.addEventListener('DOMContentLoaded', () => {
    carregarPremios();
    configurarEventos();
});

// ================================
// Configurar Eventos
// ================================
function configurarEventos() {
    formPremio.addEventListener('submit', async (e) => {
        e.preventDefault();
        await cadastrarPremio();
    });
}

// ================================
// Carregar Prêmios
// ================================
async function carregarPremios() {
    try {
        const response = await fetch(`${API_URL}/premios`);
        premios = await response.json();

        atualizarEstatisticas();
        renderizarTabela();
    } catch (error) {
        console.error('Erro ao carregar prêmios:', error);
        tabelaPremios.innerHTML = `
            <tr>
                <td colspan="3" class="text-center text-danger py-4">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Erro ao carregar prêmios
                </td>
            </tr>
        `;
    }
}

// ================================
// Atualizar Estatísticas
// ================================
function atualizarEstatisticas() {
    // Total de prêmios distintos
    const total = premios.length;

    // Prêmios disponíveis (que ainda não foram completamente sorteados)
    const disponiveis = premios.filter(p => !p.sorteado).length;

    // Prêmios sorteados
    const sorteados = premios.filter(p => p.sorteado).length;

    totalPremios.textContent = total;
    premiosDisponiveis.textContent = disponiveis;
    premiosSorteadosEl.textContent = sorteados;
    contadorPremios.textContent = `${disponiveis} prêmio${disponiveis !== 1 ? 's' : ''} ativo${disponiveis !== 1 ? 's' : ''}`;
}

// ================================
// Renderizar Tabela
// ================================
function renderizarTabela() {
    // Separa prêmios não sorteados (para ordenação) e sorteados (apenas listados)
    const premiosNaoSorteados = premios.filter(p => !p.sorteado);
    const premiosSorteados = premios.filter(p => p.sorteado);

    if (premiosNaoSorteados.length === 0) {
        tabelaPremios.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-gift me-2"></i>
                    Nenhum prêmio disponível para ordenação
                </td>
            </tr>
        `;
    } else {
        tabelaPremios.innerHTML = premiosNaoSorteados.map((premio, index) => {
            const restante = premio.quantidade - (premio.quantidadeSorteada || 0);
            const isFirst = index === 0;
            const isLast = index === premiosNaoSorteados.length - 1;
            return `
            <tr class="fade-in" data-id="${premio.id}">
                <td class="text-center align-middle">
                    <div class="d-flex flex-column align-items-center gap-1">
                        <button class="btn ${isFirst ? 'btn-outline-secondary' : 'btn-primary'} btn-sm rounded-circle p-0" 
                                style="width: 28px; height: 28px;" 
                                onclick="moverPremio(${premio.id}, 'up')" 
                                ${isFirst ? 'disabled' : ''} 
                                title="Subir">
                            <i class="bi bi-caret-up-fill"></i>
                        </button>
                        <span class="badge bg-dark rounded-pill px-2">${index + 1}º</span>
                        <button class="btn ${isLast ? 'btn-outline-secondary' : 'btn-primary'} btn-sm rounded-circle p-0" 
                                style="width: 28px; height: 28px;" 
                                onclick="moverPremio(${premio.id}, 'down')" 
                                ${isLast ? 'disabled' : ''} 
                                title="Descer">
                            <i class="bi bi-caret-down-fill"></i>
                        </button>
                    </div>
                </td>
                <td class="align-middle">
                    <i class="bi bi-gift-fill text-success me-2"></i>
                    <strong>${premio.premio}</strong>
                </td>
                <td class="text-center align-middle">
                    <span class="badge bg-info px-3 py-2">${restante} / ${premio.quantidade}</span>
                </td>
                <td class="text-center align-middle">
                    <span class="badge bg-success px-3 py-2">
                        <i class="bi bi-check-circle me-1"></i>
                        Disponível
                    </span>
                </td>
                <td class="text-center align-middle">
                    <div class="btn-group" role="group">
                        <button class="btn btn-success btn-sm" onclick="moverParaTopo(${premio.id})" title="Mover para o topo">
                            <i class="bi bi-chevron-double-up"></i>
                        </button>
                        <button class="btn btn-warning btn-sm" onclick="moverParaFim(${premio.id})" title="Mover para o fim">
                            <i class="bi bi-chevron-double-down"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="excluirPremio(${premio.id}, '${premio.premio.replace(/'/g, "\\'")}')" title="Excluir prêmio">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `}).join('');
    }

    // Renderiza tabela de prêmios sorteados (se houver)
    renderizarTabelaSorteados(premiosSorteados);
}

// ================================
// Renderizar Tabela de Prêmios Sorteados
// ================================
function renderizarTabelaSorteados(premiosSorteados) {
    if (premiosSorteados.length === 0) {
        cardPremiosSorteados.classList.add('d-none');
        return;
    }

    cardPremiosSorteados.classList.remove('d-none');
    contadorSorteados.textContent = `${premiosSorteados.length} sorteado${premiosSorteados.length !== 1 ? 's' : ''}`;

    tabelaPremiosSorteados.innerHTML = premiosSorteados.map(premio => `
        <tr class="fade-in">
            <td>
                <i class="bi bi-trophy-fill text-warning me-2"></i>
                ${premio.premio}
            </td>
            <td class="text-center">
                <span class="badge bg-warning text-dark">
                    ${premio.quantidadeSorteada || premio.quantidade} / ${premio.quantidade}
                </span>
            </td>
        </tr>
    `).join('');
}

// ================================
// Cadastrar Prêmio
// ================================
async function cadastrarPremio() {
    const premio = nomePremio.value.trim();
    const quantidade = parseInt(quantidadePremio.value) || 1;

    if (!premio) {
        mostrarToast('Por favor, informe o nome do prêmio', 'warning');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/premios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ premio, quantidade })
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar prêmio');
        }

        const novoPremio = await response.json();

        // Adiciona o novo prêmio à lista
        premios.push(novoPremio);

        // Atualiza a interface
        atualizarEstatisticas();
        renderizarTabela();

        // Limpa o formulário
        formPremio.reset();
        quantidadePremio.value = 1;
        nomePremio.focus();

        // Mostra notificação
        mostrarToast(`Prêmio "${novoPremio.premio}" cadastrado com sucesso!`, 'success');

    } catch (error) {
        console.error('Erro ao cadastrar prêmio:', error);
        mostrarToast('Erro ao cadastrar prêmio', 'danger');
    }
}

// ================================
// Mostrar Toast de Notificação
// ================================
function mostrarToast(mensagem, tipo = 'success') {
    const toastEl = document.getElementById('toastNotificacao');
    const toastMensagem = document.getElementById('toastMensagem');
    const toastIcon = document.getElementById('toastIcon');

    // Atualiza o ícone baseado no tipo
    toastIcon.className = `bi me-2 ${tipo === 'success' ? 'bi-check-circle-fill text-success' :
            tipo === 'warning' ? 'bi-exclamation-triangle-fill text-warning' :
                'bi-x-circle-fill text-danger'
        }`;

    toastMensagem.textContent = mensagem;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// ================================
// Mover Prêmio (up/down)
// ================================
async function moverPremio(premioId, direcao) {
    // Trabalha apenas com prêmios não sorteados
    const premiosNaoSorteados = premios.filter(p => !p.sorteado);
    const index = premiosNaoSorteados.findIndex(p => p.id === premioId);
    if (index === -1) return;

    const novoIndex = direcao === 'up' ? index - 1 : index + 1;
    if (novoIndex < 0 || novoIndex >= premiosNaoSorteados.length) return;

    // Troca as posições no array de não sorteados
    [premiosNaoSorteados[index], premiosNaoSorteados[novoIndex]] = [premiosNaoSorteados[novoIndex], premiosNaoSorteados[index]];

    // Reconstroi o array de premios mantendo os sorteados no final
    const premiosSorteados = premios.filter(p => p.sorteado);
    premios = [...premiosNaoSorteados, ...premiosSorteados];

    await salvarOrdem();
}

// ================================
// Mover Prêmio para o Topo
// ================================
async function moverParaTopo(premioId) {
    // Trabalha apenas com prêmios não sorteados
    const premiosNaoSorteados = premios.filter(p => !p.sorteado);
    const index = premiosNaoSorteados.findIndex(p => p.id === premioId);
    if (index <= 0) return;

    const premio = premiosNaoSorteados.splice(index, 1)[0];
    premiosNaoSorteados.unshift(premio);

    // Reconstroi o array de premios mantendo os sorteados no final
    const premiosSorteados = premios.filter(p => p.sorteado);
    premios = [...premiosNaoSorteados, ...premiosSorteados];

    await salvarOrdem();
}

// ================================
// Mover Prêmio para o Fim
// ================================
async function moverParaFim(premioId) {
    // Trabalha apenas com prêmios não sorteados
    const premiosNaoSorteados = premios.filter(p => !p.sorteado);
    const index = premiosNaoSorteados.findIndex(p => p.id === premioId);
    if (index === -1 || index === premiosNaoSorteados.length - 1) return;

    const premio = premiosNaoSorteados.splice(index, 1)[0];
    premiosNaoSorteados.push(premio);

    // Reconstroi o array de premios mantendo os sorteados no final
    const premiosSorteados = premios.filter(p => p.sorteado);
    premios = [...premiosNaoSorteados, ...premiosSorteados];

    await salvarOrdem();
}

// ================================
// Salvar Ordem no Backend
// ================================
async function salvarOrdem() {
    try {
        const premiosOrdenados = premios.map((p, index) => ({
            id: p.id,
            ordem: index
        }));

        const response = await fetch(`${API_URL}/premios/reordenar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ premios: premiosOrdenados })
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar ordem');
        }

        // Atualiza a interface
        renderizarTabela();

    } catch (error) {
        console.error('Erro ao salvar ordem:', error);
        mostrarToast('Erro ao salvar ordem dos prêmios', 'danger');
        // Recarrega do servidor em caso de erro
        await carregarPremios();
    }
}

// ================================
// Excluir Prêmio
// ================================
async function excluirPremio(premioId, nomePremio) {
    if (!confirm(`Tem certeza que deseja excluir o prêmio "${nomePremio}"?`)) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/premios/${premioId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || 'Erro ao excluir prêmio');
        }

        // Remove da lista local
        premios = premios.filter(p => p.id !== premioId);

        // Atualiza a interface
        atualizarEstatisticas();
        renderizarTabela();

        mostrarToast(`Prêmio "${nomePremio}" excluído com sucesso!`, 'success');

    } catch (error) {
        console.error('Erro ao excluir prêmio:', error);
        mostrarToast(error.message || 'Erro ao excluir prêmio', 'danger');
    }
}
