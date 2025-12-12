const API_URL = 'https://sorteio.maza.com.br/api';

const sqlEditor = document.getElementById('sqlEditor');
const resultContainer = document.getElementById('resultContainer');
const historyList = document.getElementById('historyList');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarHistorico();

    // Suporte a CTRL+ENTER para executar
    sqlEditor.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            executarQuery();
        }
    });

    // Carregar Notepad ao abrir modal
    const notepadModal = document.getElementById('notepadModal');
    notepadModal.addEventListener('show.bs.modal', carregarNotepad);
});

async function carregarNotepad() {
    const notepadContent = document.getElementById('notepadContent');
    const notepadStatus = document.getElementById('notepadStatus');

    notepadStatus.textContent = 'Carregando...';
    try {
        const response = await fetch(`${API_URL}/admin/notepad`);
        const data = await response.json();
        notepadContent.value = data.content || '';
        notepadStatus.textContent = '';
    } catch (error) {
        console.error("Erro ao carregar notepad:", error);
        notepadStatus.textContent = 'Erro ao carregar.';
    }
}

async function salvarNotepad() {
    const content = document.getElementById('notepadContent').value;
    const notepadStatus = document.getElementById('notepadStatus');

    notepadStatus.textContent = 'Salvando...';
    try {
        await fetch(`${API_URL}/admin/notepad`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        notepadStatus.textContent = 'Salvo com sucesso!';
        setTimeout(() => notepadStatus.textContent = '', 2000);
    } catch (error) {
        console.error("Erro ao salvar notepad:", error);
        notepadStatus.textContent = 'Erro ao salvar.';
    }
}

async function executarQuery() {
    const query = sqlEditor.value.trim();
    if (!query) {
        alert('Digite uma query SQL!');
        return;
    }

    resultContainer.innerHTML = '<div class="text-center p-4"><div class="spinner-border text-primary" role="status"></div><div class="mt-2">Executando...</div></div>';

    try {
        const response = await fetch(`${API_URL}/admin/sql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const data = await response.json();

        if (response.ok) {
            renderizarResultado(data.data);
            carregarHistorico(); // Atualiza histórico
        } else {
            renderizarErro(data.error);
        }
    } catch (error) {
        renderizarErro(error.message);
    }
}

function renderizarResultado(data) {
    if (!data) {
        resultContainer.innerHTML = '<div class="alert alert-success m-3">Comando executado com sucesso (sem retorno de dados).</div>';
        return;
    }

    // Se for array (SELECT)
    if (Array.isArray(data)) {
        if (data.length === 0) {
            resultContainer.innerHTML = '<div class="alert alert-info m-3">Nenhum registro encontrado.</div>';
            return;
        }

        const colunas = Object.keys(data[0]);

        const tableHtml = `
            <table class="table table-bordered table-striped table-hover table-sm table-console mb-0">
                <thead class="table-dark">
                    <tr>
                        ${colunas.map(col => `<th>${col}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${data.map(row => `
                        <tr>
                            ${colunas.map(col => `<td>${formatarValor(row[col])}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        resultContainer.innerHTML = tableHtml;
    } else {
        // Se for objeto (INSERT/UPDATE result)
        resultContainer.innerHTML = `<div class="alert alert-success m-3"><pre class="mb-0">${JSON.stringify(data, null, 2)}</pre></div>`;
    }
}

function formatarValor(valor) {
    if (valor === null) return '<span class="text-muted">NULL</span>';
    if (valor === true) return '<span class="text-success">TRUE</span>';
    if (valor === false) return '<span class="text-danger">FALSE</span>';
    if (typeof valor === 'object') return `<small>${JSON.stringify(valor)}</small>`;
    return valor;
}

function renderizarErro(mensagem) {
    resultContainer.innerHTML = `
        <div class="alert alert-danger m-3">
            <h5 class="alert-heading"><i class="bi bi-exclamation-triangle-fill me-2"></i>Erro ao executar</h5>
            <hr>
            <pre class="mb-0 text-wrap">${mensagem}</pre>
        </div>
    `;
}

async function carregarHistorico() {
    try {
        const response = await fetch(`${API_URL}/admin/history`);
        const history = await response.json();

        if (history.length === 0) {
            historyList.innerHTML = '<div class="text-center p-3 text-muted">Histórico vazio</div>';
            return;
        }

        historyList.innerHTML = history.map(item => `
            <div class="list-group-item history-item" onclick="carregarDoHistorico(this)">
                <div class="d-flex w-100 justify-content-between">
                    <small class="text-muted">${new Date(item.timestamp).toLocaleTimeString()}</small>
                    <span class="badge ${item.success ? 'bg-success' : 'bg-danger'}">${item.success ? 'OK' : 'ERR'}</span>
                </div>
                <div class="mt-1 text-truncate font-monospace small" title="${item.query.replace(/"/g, '&quot;')}">
                    ${item.query}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("Erro ao carregar histórico:", error);
    }
}

window.carregarDoHistorico = function (el) {
    const query = el.querySelector('.text-truncate').innerText;
    sqlEditor.value = query;
    sqlEditor.focus();
}
