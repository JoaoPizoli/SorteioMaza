// Sistema de autenticação e controle de acesso
const Auth = {
    // Permissões por role
    permissoes: {
        'ADMIN': ['index.html', 'funcionarios.html', 'premios.html', 'sorteados.html'],
        'SORTEIO': ['index.html', 'sorteados.html'],
        'PRESENCA': ['funcionarios.html'],
        'PREMIOS': ['premios.html']
    },

    // Verifica se o usuário está logado
    isLoggedIn() {
        const usuario = localStorage.getItem('usuario');
        return usuario !== null;
    },

    // Retorna o usuário logado
    getUsuario() {
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario) : null;
    },

    // Verifica se o usuário tem acesso à página atual
    temAcesso(pagina) {
        const usuario = this.getUsuario();
        if (!usuario) return false;
        
        const paginasPermitidas = this.permissoes[usuario.role] || [];
        return paginasPermitidas.includes(pagina);
    },

    // Verifica acesso e redireciona se necessário
    verificarAcesso() {
        // Pega o nome da página atual
        const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
        
        // Se for a página de login, não verificar
        if (paginaAtual === 'login.html') return;

        // Se não estiver logado, redirecionar para login
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return;
        }

        // Verificar se tem acesso à página
        if (!this.temAcesso(paginaAtual)) {
            alert('Você não tem permissão para acessar esta página!');
            this.redirecionarParaPaginaPermitida();
        }
    },

    // Redireciona para a primeira página permitida
    redirecionarParaPaginaPermitida() {
        const usuario = this.getUsuario();
        if (!usuario) {
            window.location.href = 'login.html';
            return;
        }

        const paginasPermitidas = this.permissoes[usuario.role] || [];
        if (paginasPermitidas.length > 0) {
            window.location.href = paginasPermitidas[0];
        } else {
            window.location.href = 'login.html';
        }
    },

    // Logout
    logout() {
        localStorage.removeItem('usuario');
        window.location.href = 'login.html';
    },

    // Atualiza a navbar baseado nas permissões
    atualizarNavbar() {
        const usuario = this.getUsuario();
        if (!usuario) return;

        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (link) {
                const href = link.getAttribute('href');
                const pagina = href.split('/').pop();
                
                if (!this.permissoes[usuario.role].includes(pagina)) {
                    item.style.display = 'none';
                }
            }
        });

        // Adicionar nome do usuário e botão de logout na navbar
        const navbar = document.querySelector('.navbar-nav');
        if (navbar) {
            // Adicionar botão de logout
            const separador = document.createElement('li');
            separador.className = 'nav-item ms-3 d-flex align-items-center';
            separador.innerHTML = `
                <span class="text-white-50 me-2">|</span>
                <button class="btn btn-outline-light btn-sm" onclick="Auth.logout()" title="Sair">
                    <i class="bi bi-box-arrow-right"></i>
                </button>
            `;
            navbar.appendChild(separador);
        }
    },

    // Inicialização - chamar no carregamento de cada página
    init() {
        this.verificarAcesso();
        this.atualizarNavbar();
    }
};

// Executar verificação quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
});
