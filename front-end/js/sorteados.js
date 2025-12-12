const API_URL = 'http://localhost:4001/api';

// Elementos DOM
const tabelaSorteados = document.getElementById('tabelaSorteados');
const totalSorteados = document.getElementById('totalSorteados');
const totalPremiosEntregues = document.getElementById('totalPremiosEntregues');
const premiosDistintos = document.getElementById('premiosDistintos');

// Variáveis de estado
let sorteios = [];

// ================================
// Inicialização
// ================================
document.addEventListener('DOMContentLoaded', () => {
    carregarSorteados();

    // Atualiza automaticamente a cada 30 segundos
    setInterval(carregarSorteados, 30000);
});

// ================================
// Carregar Sorteados
// ================================
async function carregarSorteados() {
    try {
        const response = await fetch(`${API_URL}/sorteios`);
        sorteios = await response.json();

        atualizarEstatisticas();
        renderizarTabela();
    } catch (error) {
        console.error('Erro ao carregar sorteados:', error);
        tabelaSorteados.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-danger py-5">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Erro ao carregar sorteados
                </td>
            </tr>
        `;
    }
}

// ================================
// Atualizar Estatísticas
// ================================
function atualizarEstatisticas() {
    totalSorteados.textContent = sorteios.length;

    // Conta apenas os prêmios efetivamente entregues
    const entregues = sorteios.filter(s => s.entregue).length;
    totalPremiosEntregues.textContent = entregues;

    // Conta prêmios distintos
    const premiosUnicos = new Set(sorteios.map(s => s.premio?.id));
    premiosDistintos.textContent = premiosUnicos.size;
}

// ================================
// Marcar como Entregue
// ================================
async function marcarEntregue(sorteioId, entregue) {
    try {
        const response = await fetch(`${API_URL}/sorteios/${sorteioId}/entregue`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entregue })
        });

        if (response.ok) {
            // Atualiza o estado local
            const sorteio = sorteios.find(s => s.id === sorteioId);
            if (sorteio) {
                sorteio.entregue = entregue;
                atualizarEstatisticas();
            }
        } else {
            console.error('Erro ao atualizar status de entrega');
            // Reverte o checkbox em caso de erro
            carregarSorteados();
        }
    } catch (error) {
        console.error('Erro ao marcar como entregue:', error);
        carregarSorteados();
    }
}

// ================================
// Filtrar Ganhadores
// ================================
function filtrarGanhadores() {
    const termo = document.getElementById('pesquisaGanhador').value.toLowerCase().trim();
    renderizarTabela(termo);
}

// ================================
// Limpar Pesquisa
// ================================
function limparPesquisa() {
    document.getElementById('pesquisaGanhador').value = '';
    renderizarTabela();
}

// ================================
// Renderizar Tabela
// ================================
function renderizarTabela(filtro = '') {
    // Filtra os sorteios pelo nome do ganhador
    const sorteiosFiltrados = filtro
        ? sorteios.filter(s => s.ganhador?.nome?.toLowerCase().includes(filtro))
        : sorteios;

    if (sorteiosFiltrados.length === 0) {
        tabelaSorteados.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted py-5">
                    <i class="bi bi-${filtro ? 'search' : 'inbox'} display-4 d-block mb-3"></i>
                    ${filtro ? 'Nenhum ganhador encontrado com esse nome' : 'Nenhum sorteio realizado ainda'}
                </td>
            </tr>
        `;
        return;
    }

    tabelaSorteados.innerHTML = sorteiosFiltrados.map((sorteio) => {
        // Encontra o índice original do sorteio
        const indiceOriginal = sorteios.findIndex(s => s.id === sorteio.id) + 1;
        return `
        <tr class="fade-in ${sorteio.entregue ? 'table-success' : ''}">
            <td class="text-center">
                <div class="numero-sorteio mx-auto">${indiceOriginal}</div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <i class="bi bi-person-circle text-primary me-2 fs-4"></i>
                    <span class="ganhador-nome">${sorteio.ganhador?.nome || 'N/A'}</span>
                </div>
            </td>
            <td>
                <span class="badge badge-premio">
                    <i class="bi bi-trophy-fill me-1"></i>
                    ${sorteio.premio?.premio || 'N/A'}
                </span>
            </td>
            <td class="text-center">
                <div class="form-check form-switch d-flex justify-content-center">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="entregue_${sorteio.id}"
                        ${sorteio.entregue ? 'checked' : ''}
                        onchange="marcarEntregue(${sorteio.id}, this.checked)"
                        style="width: 3em; height: 1.5em; cursor: pointer;"
                    >
                </div>
            </td>
        </tr>
    `;
    }).join('');
}

