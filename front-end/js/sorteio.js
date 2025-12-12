
const API_URL = 'https://sorteio.maza.com.br/api';

// Elementos DOM
const botoesQtd = document.querySelectorAll('.btn-qtd');
const premioAtualEl = document.getElementById('premioAtual');
const progressoContainer = document.getElementById('progressoContainer');
const progressoBar = document.getElementById('progressoBar');
const progressoTexto = document.getElementById('progressoTexto');
const btnSortear = document.getElementById('btnSortear');
const roletaNames = document.getElementById('roletaNames');
const resultadoSorteio = document.getElementById('resultadoSorteio');
const nomeGanhador = document.getElementById('nomeGanhador');
const premioGanho = document.getElementById('premioGanho');
const historicoSorteios = document.getElementById('historicoSorteios');
const ganhadoresRodada = document.getElementById('ganhadoresRodada');
const listaGanhadoresRodada = document.getElementById('listaGanhadoresRodada');

// Variáveis de estado
let funcionarios = [];
let premios = [];
let sorteando = false;
let sorteioRealizado = false;
let ganhadoresDaRodada = [];
let qtdSorteiosSelecionada = 1; // Valor padrão

// ================================
// Função para gerar índice aleatório criptograficamente seguro
// Implementação sem viés (rejection sampling)
// ================================
function getRandomIndex(max) {
    const randomBuffer = new Uint32Array(1);
    const limit = Math.floor(0xFFFFFFFF / max) * max;

    do {
        crypto.getRandomValues(randomBuffer);
    } while (randomBuffer[0] >= limit);

    return randomBuffer[0] % max;
}

// ================================
// Inicialização
// ================================
document.addEventListener('DOMContentLoaded', () => {
    carregarPremios();
    carregarFuncionarios();
    carregarHistorico();
    configurarBotoesQuantidade();
});

// ================================
// Configurar Botões de Quantidade
// ================================
function configurarBotoesQuantidade() {
    const botoesAtuais = document.querySelectorAll('.btn-qtd');
    botoesAtuais.forEach(btn => {
        btn.addEventListener('click', () => {
            if (sorteando) return; // Não permite mudar durante sorteio

            // Remove active de todos
            document.querySelectorAll('.btn-qtd').forEach(b => {
                b.classList.remove('active', 'btn-danger');
                b.classList.add('btn-outline-danger');
            });

            // Adiciona active no clicado
            btn.classList.remove('btn-outline-danger');
            btn.classList.add('active', 'btn-danger');

            // Atualiza quantidade selecionada
            qtdSorteiosSelecionada = parseInt(btn.dataset.qtd);
        });
    });
}

// ================================
// Atualizar Botão de Quantidade do Prêmio
// ================================
function atualizarBotaoPremio() {
    const container = document.getElementById('opcoesSorteio');
    const btnPremioExistente = document.getElementById('btnQtdPremio');

    // Remove botão antigo se existir
    if (btnPremioExistente) {
        btnPremioExistente.remove();
    }

    // Calcula total de unidades disponíveis do próximo prêmio
    const premiosDisponiveis = premios.filter(p => !p.sorteado);
    if (premiosDisponiveis.length > 0) {
        // Logica para o proximo premio se necessario no futuro
    }

    // Lógica para desabilitar opção 5 se prêmio < 5
    const btnCinco = document.querySelector('.btn-qtd[data-qtd="5"]');
    if (btnCinco && premiosDisponiveis.length > 0) {
        const proximoPremio = premiosDisponiveis[0];
        const qtdRestante = proximoPremio.quantidade - (proximoPremio.quantidadeSorteada || 0);

        console.log(`Prêmio: ${proximoPremio.premio}, Restante: ${qtdRestante}`);

        if (qtdRestante < 5) {
            btnCinco.disabled = true;
            btnCinco.title = "Quantidade disponível menor que 5";

            // Se estava selecionado, volta para 1
            if (btnCinco.classList.contains('active')) {
                const btnUm = document.querySelector('.btn-qtd[data-qtd="1"]');
                if (btnUm) {
                    btnCinco.classList.remove('active', 'btn-danger');
                    btnCinco.classList.add('btn-outline-danger');
                    btnUm.classList.add('active', 'btn-danger');
                    btnUm.classList.remove('btn-outline-danger');
                    qtdSorteiosSelecionada = 1;
                }
            }
        } else {
            btnCinco.disabled = false;
            btnCinco.title = "";
        }
    }
}

// ================================
// Carregar Prêmios Disponíveis
// ================================
async function carregarPremios() {
    try {
        const response = await fetch(`${API_URL}/premios`);
        premios = await response.json();

        const premiosDisponiveis = premios.filter(p => !p.sorteado);

        if (premiosDisponiveis.length === 0) {
            premioAtualEl.innerHTML = '<i class="bi bi-x-circle me-1"></i>Nenhum prêmio disponível';
            btnSortear.disabled = true;
        } else {
            premioAtualEl.innerHTML = `<i class="bi bi-trophy me-1"></i>${premiosDisponiveis[0].premio}`;
            btnSortear.disabled = false;

            // Atualiza botão com quantidade do prêmio
            atualizarBotaoPremio();
        }
    } catch (error) {
        console.error('Erro ao carregar prêmios:', error);
        premioAtualEl.innerHTML = '<i class="bi bi-x-circle me-1"></i>Erro ao carregar prêmios';
    }
}

// ================================
// Carregar Funcionários
// ================================
async function carregarFuncionarios(atualizarVisualRoleta = true) {
    try {
        const response = await fetch(`${API_URL}/funcionarios`);
        funcionarios = await response.json();

        // Só atualiza a roleta visualmente se não houver um sorteio realizado
        // e se for permitido atualizar - sempre mostra "SORTEIE" como placeholder
        if (atualizarVisualRoleta && !sorteioRealizado) {
            roletaNames.innerHTML = '<div class="roleta-name">AGUARDANDO SORTEIO...</div>';
        }
    } catch (error) {
        console.error('Erro ao carregar funcionários:', error);
    }
}

// ================================
// Carregar Histórico de Sorteios
// ================================
async function carregarHistorico() {
    try {
        const response = await fetch(`${API_URL}/sorteios`);
        const sorteios = await response.json();

        if (sorteios.length === 0) {
            historicoSorteios.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center text-muted py-3">
                        Nenhum sorteio realizado ainda
                    </td>
                </tr>
            `;
        } else {
            historicoSorteios.innerHTML = sorteios.map((sorteio, index) => `
                <tr class="fade-in">
                    <td>${index + 1}</td>
                    <td>
                        <i class="bi bi-person-fill text-danger me-2"></i>
                        ${sorteio.ganhador?.nome || 'N/A'}
                    </td>
                    <td>
                        <span class="badge bg-warning text-dark">
                            <i class="bi bi-trophy-fill me-1"></i>
                            ${sorteio.premio?.premio || 'N/A'}
                        </span>
                    </td>
                </tr>
            `).join('');
        }
    } catch (error) {
        console.error('Erro ao carregar histórico:', error);
        historicoSorteios.innerHTML = `
            <tr>
                <td colspan="3" class="text-center text-danger">
                    Erro ao carregar histórico
                </td>
            </tr>
        `;
    }
}

// ================================
// Evento do Botão Sortear
// ================================
btnSortear.addEventListener('click', async () => {
    if (sorteando) return;

    const qtdSorteios = qtdSorteiosSelecionada;

    // Pega prêmios disponíveis (ordenados) - prêmios que ainda têm unidades para sortear
    const premiosDisponiveis = premios.filter(p => !p.sorteado);

    if (premiosDisponiveis.length === 0) {
        alert('Nenhum prêmio disponível para sorteio!');
        return;
    }

    // Pega funcionários disponíveis
    let funcionariosDisponiveis = funcionarios.filter(f => f.presente && !f.sorteado && !f.convidado);

    if (funcionariosDisponiveis.length === 0) {
        alert('Nenhum funcionário disponível para sorteio!');
        return;
    }

    // Calcula total de unidades disponíveis para sortear (soma das quantidades restantes)
    let totalUnidadesDisponiveis = 0;
    for (const premio of premiosDisponiveis) {
        const qtdRestante = premio.quantidade - (premio.quantidadeSorteada || 0);
        totalUnidadesDisponiveis += qtdRestante;
    }

    // Calcula quantos sorteios podemos fazer
    const sorteiosPossiveis = Math.min(qtdSorteios, totalUnidadesDisponiveis, funcionariosDisponiveis.length);

    if (sorteiosPossiveis === 0) {
        alert('Não há prêmios ou funcionários suficientes para sortear!');
        return;
    }

    // Inicia os sorteios
    sorteando = true;
    sorteioRealizado = false;
    ganhadoresDaRodada = [];

    btnSortear.disabled = true;
    btnSortear.classList.add('sorteando');
    btnSortear.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>SORTEANDO...';

    // Desabilita botões de quantidade
    botoesQtd.forEach(btn => btn.disabled = true);

    // Mostra barra de progresso
    progressoContainer.classList.remove('d-none');
    ganhadoresRodada.classList.add('d-none');
    resultadoSorteio.classList.add('d-none');

    // Executa os sorteios em sequência
    let sorteiosRealizados = 0;
    let indicePremioAtual = 0;

    while (sorteiosRealizados < sorteiosPossiveis && indicePremioAtual < premiosDisponiveis.length) {
        const premioAtual = premiosDisponiveis[indicePremioAtual];
        const qtdRestanteDoPremio = premioAtual.quantidade - (premioAtual.quantidadeSorteada || 0);

        // Sorteia todas as unidades deste prêmio (ou até acabar os sorteios/funcionários)
        for (let j = 0; j < qtdRestanteDoPremio && sorteiosRealizados < sorteiosPossiveis; j++) {
            // Atualiza progresso
            const progresso = (sorteiosRealizados / sorteiosPossiveis) * 100;
            progressoBar.style.width = `${progresso}%`;
            progressoTexto.textContent = `${sorteiosRealizados}/${sorteiosPossiveis}`;

            premioAtualEl.innerHTML = `<i class="bi bi-trophy me-1"></i>${premioAtual.premio} (${j + 1}/${qtdRestanteDoPremio})`;

            // Atualiza lista de funcionários disponíveis (exclui os já sorteados nesta rodada)
            funcionariosDisponiveis = funcionarios.filter(f =>
                f.presente && !f.sorteado && !f.convidado &&
                !ganhadoresDaRodada.find(g => g.funcionarioId === f.id)
            );

            if (funcionariosDisponiveis.length === 0) {
                alert('Acabaram os funcionários disponíveis!');
                indicePremioAtual = premiosDisponiveis.length; // Sair do while também
                break;
            }

            // Sorteia um funcionário usando crypto.getRandomValues() para aleatoriedade criptograficamente segura
            const indiceAleatorio = getRandomIndex(funcionariosDisponiveis.length);
            const funcionarioSorteado = funcionariosDisponiveis[indiceAleatorio];

            try {
                // Anima a roleta
                await animarRoleta(funcionariosDisponiveis, funcionarioSorteado.nome);

                // Mostra o resultado
                roletaNames.innerHTML = `<div class="roleta-name winner">${funcionarioSorteado.nome}</div>`;
                nomeGanhador.textContent = funcionarioSorteado.nome;
                premioGanho.textContent = premioAtual.premio;
                resultadoSorteio.classList.remove('d-none');

                // Efeito de confetti
                criarConfetti();

                // Registra no backend
                const response = await fetch(`${API_URL}/sorteio`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ premioId: premioAtual.id, funcionarioId: funcionarioSorteado.id })
                });

                if (!response.ok) {
                    throw new Error('Erro ao registrar sorteio');
                }

                // Adiciona à lista de ganhadores da rodada
                ganhadoresDaRodada.push({
                    funcionarioId: funcionarioSorteado.id,
                    nome: funcionarioSorteado.nome,
                    premio: premioAtual.premio
                });

                // Atualiza a lista de ganhadores da rodada na tela
                atualizarListaGanhadoresRodada();

                // Incrementa a quantidade sorteada localmente
                premioAtual.quantidadeSorteada = (premioAtual.quantidadeSorteada || 0) + 1;
                if (premioAtual.quantidadeSorteada >= premioAtual.quantidade) {
                    premioAtual.sorteado = true;
                }

                // Marca funcionário como sorteado localmente
                const funcIndex = funcionarios.findIndex(f => f.id === funcionarioSorteado.id);
                if (funcIndex !== -1) {
                    funcionarios[funcIndex].sorteado = true;
                }

                sorteiosRealizados++;

                // Pausa entre sorteios (exceto no último)
                if (sorteiosRealizados < sorteiosPossiveis) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }

            } catch (error) {
                console.error('Erro ao sortear:', error);
                alert(`Erro ao registrar sorteio: ${error.message}`);
                indicePremioAtual = premiosDisponiveis.length; // Sair do while também
                break;
            }
        }

        // Passa para o próximo prêmio
        indicePremioAtual++;
    }

    // Finaliza
    progressoBar.style.width = '100%';
    progressoTexto.textContent = `${sorteiosRealizados}/${sorteiosPossiveis}`;
    sorteioRealizado = true;

    // Atualiza os dados do servidor
    await carregarPremios();
    await carregarFuncionarios(false);
    await carregarHistorico();

    resetarBotao();
});

// ================================
// Atualizar Lista de Ganhadores da Rodada
// ================================
function atualizarListaGanhadoresRodada() {
    ganhadoresRodada.classList.remove('d-none');
    listaGanhadoresRodada.innerHTML = ganhadoresDaRodada.map((g, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><i class="bi bi-person-fill text-success me-1"></i>${g.nome}</td>
            <td><span class="badge bg-warning text-dark">${g.premio}</span></td>
        </tr>
    `).join('');
}

// ================================
// Animação da Roleta
// ================================
function animarRoleta(funcionariosDisponiveis, nomeGanhadorReal) {
    return new Promise(resolve => {
        const nomes = funcionariosDisponiveis.map(f => f.nome);
        const totalNomes = nomes.length;

        const DURACAO_TOTAL_MS = 3000;
        const VELOCIDADE_INICIAL = 30;
        const VELOCIDADE_FINAL = 300;

        let rotacaoAtual = 0;
        const tempoInicio = Date.now();

        function girar() {
            const indiceAtual = rotacaoAtual % totalNomes;
            roletaNames.innerHTML = `<div class="roleta-name">${nomes[indiceAtual]}</div>`;

            const tempoDecorrido = Date.now() - tempoInicio;
            const progresso = Math.min(tempoDecorrido / DURACAO_TOTAL_MS, 1);

            if (tempoDecorrido < DURACAO_TOTAL_MS) {
                rotacaoAtual++;
                const velocidade = VELOCIDADE_INICIAL + (progresso * progresso * (VELOCIDADE_FINAL - VELOCIDADE_INICIAL));
                setTimeout(girar, velocidade);
            } else {
                roletaNames.innerHTML = `<div class="roleta-name">${nomeGanhadorReal}</div>`;
                resolve();
            }
        }

        girar();
    });
}

// ================================
// Resetar Botão de Sorteio
// ================================
function resetarBotao() {
    sorteando = false;
    btnSortear.disabled = false;
    btnSortear.classList.remove('sorteando');
    btnSortear.innerHTML = '<i class="bi bi-shuffle me-2"></i>INICIAR SORTEIOS!';

    // Reabilita botões de quantidade
    // Reabilita botões de quantidade
    botoesQtd.forEach(btn => btn.disabled = false);

    // Atualiza o estado do botão de 5 de acordo com o próximo prêmio
    atualizarBotaoPremio();
}

// ================================
// Efeito Confetti
// ================================
function criarConfetti() {
    const cores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }
}
