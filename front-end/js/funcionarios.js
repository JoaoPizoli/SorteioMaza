const API_URL = 'https://sorteio.maza.com.br/api';

// Elementos DOM
const searchFuncionario = document.getElementById('searchFuncionario');
const tabelaFuncionarios = document.getElementById('tabelaFuncionarios');
const totalFuncionarios = document.getElementById('totalFuncionarios');
const totalPresentes = document.getElementById('totalPresentes');
const totalFaltaram = document.getElementById('totalFaltaram');

// Variáveis de estado
let funcionarios = [];
let filtroAtual = 'todos';

// ================================
// Inicialização
// ================================
document.addEventListener('DOMContentLoaded', () => {
    carregarFuncionarios();
    configurarEventos();
});

// ================================
// Configurar Eventos
// ================================
function configurarEventos() {
    // Pesquisa em tempo real
    searchFuncionario.addEventListener('input', () => {
        renderizarTabela();
    });

    // Filtros de presença
    document.getElementById('filtroTodos').addEventListener('change', () => {
        filtroAtual = 'todos';
        renderizarTabela();
    });

    document.getElementById('filtroPresentes').addEventListener('change', () => {
        filtroAtual = 'presentes';
        renderizarTabela();
    });

    document.getElementById('filtroFaltaram').addEventListener('change', () => {
        filtroAtual = 'faltaram';
        renderizarTabela();
    });
}

// ================================
// Carregar Funcionários
// ================================
async function carregarFuncionarios() {
    try {
        const response = await fetch(`${API_URL}/funcionarios`);
        funcionarios = await response.json();

        atualizarEstatisticas();
        renderizarTabela();
    } catch (error) {
        console.error('Erro ao carregar funcionários:', error);
        tabelaFuncionarios.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-danger py-4">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Erro ao carregar funcionários
                </td>
            </tr>
        `;
    }
}

// ================================
// Atualizar Estatísticas
// ================================
function atualizarEstatisticas() {
    const presentes = funcionarios.filter(f => f.presente).length;
    const faltaram = funcionarios.filter(f => !f.presente).length;

    totalFuncionarios.textContent = funcionarios.length;
    totalPresentes.textContent = presentes;
    totalFaltaram.textContent = faltaram;
}

// ================================
// Renderizar Tabela
// ================================
function renderizarTabela() {
    const termoPesquisa = searchFuncionario.value.toLowerCase().trim();

    // Filtra por pesquisa
    let funcionariosFiltrados = funcionarios.filter(f =>
        f.nome.toLowerCase().startsWith(termoPesquisa)
    );

    // Filtra por presença
    if (filtroAtual === 'presentes') {
        funcionariosFiltrados = funcionariosFiltrados.filter(f => f.presente);
    } else if (filtroAtual === 'faltaram') {
        funcionariosFiltrados = funcionariosFiltrados.filter(f => !f.presente);
    }

    if (funcionariosFiltrados.length === 0) {
        tabelaFuncionarios.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-search me-2"></i>
                    Nenhum funcionário encontrado
                </td>
            </tr>
        `;
        return;
    }

    tabelaFuncionarios.innerHTML = funcionariosFiltrados.map(funcionario => `
        <tr class="fade-in" data-id="${funcionario.id}">
            <td class="fw-bold">#${funcionario.id}</td>
            <td>
                <i class="bi bi-person-fill text-danger me-2"></i>
                ${funcionario.nome}
            </td>
            <td class="text-center">
                <span class="badge ${funcionario.presente ? 'bg-success' : 'bg-danger'} px-3 py-2">
                    <i class="bi ${funcionario.presente ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-1"></i>
                    ${funcionario.presente ? 'Presente' : 'Faltou'}
                </span>
            </td>
            <td class="text-center">
                ${funcionario.convidado ?
            '<span class="badge bg-primary px-3 py-2"><i class="bi bi-star-fill me-1"></i>Convidado</span>' :
            (funcionario.sorteado ?
                '<span class="badge bg-warning text-dark px-3 py-2"><i class="bi bi-trophy-fill me-1"></i>Sorteado</span>' :
                '<span class="badge bg-secondary px-3 py-2">Não sorteado</span>')}
            </td>
            <td class="text-center">
                <button class="btn ${funcionario.presente ? 'btn-outline-danger' : 'btn-outline-success'} btn-sm btn-presenca" 
                        onclick="alterarPresenca(${funcionario.id}, ${!funcionario.presente})"
                        ${funcionario.sorteado ? 'disabled' : ''}>
                    <i class="bi ${funcionario.presente ? 'bi-x-lg' : 'bi-check-lg'} me-1"></i>
                    ${funcionario.presente ? 'Marcar Falta' : 'Marcar Presente'}
                </button>
            </td>
        </tr>
    `).join('');
}

// ================================
// Alterar Presença do Funcionário
// ================================
async function alterarPresenca(funcionarioId, presente) {
    try {
        const response = await fetch(`${API_URL}/funcionarios/presenca`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ funcionarioId, presente })
        });

        if (!response.ok) {
            throw new Error('Erro ao alterar presença');
        }

        const funcionarioAtualizado = await response.json();

        // Atualiza o funcionário na lista local
        const index = funcionarios.findIndex(f => f.id === funcionarioId);
        if (index !== -1) {
            funcionarios[index] = funcionarioAtualizado;
        }

        // Atualiza a interface
        atualizarEstatisticas();
        renderizarTabela();

        // Mostra notificação
        mostrarToast(
            `${funcionarioAtualizado.nome} marcado como ${presente ? 'presente' : 'faltou'}!`,
            presente ? 'success' : 'warning'
        );

    } catch (error) {
        console.error('Erro ao alterar presença:', error);
        mostrarToast('Erro ao alterar presença do funcionário', 'danger');
    }
}

// ================================
// Mostrar Toast de Notificação
// ================================
function mostrarToast(mensagem, tipo = 'success') {
    const toastEl = document.getElementById('toastNotificacao');
    const toastMensagem = document.getElementById('toastMensagem');
    const toastHeader = toastEl.querySelector('.toast-header i');

    // Atualiza o ícone baseado no tipo
    toastHeader.className = `bi me-2 ${tipo === 'success' ? 'bi-check-circle-fill text-success' :
        tipo === 'warning' ? 'bi-exclamation-triangle-fill text-warning' :
            'bi-x-circle-fill text-danger'
        }`;

    toastMensagem.textContent = mensagem;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}
