import AuthService from '../service/auth.service.js'

export default class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    async login(req, res) {
        try {
            const { username, senha } = req.body;

            if (!username || !senha) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'Username e senha são obrigatórios' 
                });
            }

            const result = await this.authService.login(username, senha);

            if (!result.success) {
                return res.status(401).json(result);
            }

            return res.status(200).json(result);
        } catch (error) {
            console.error("Erro no login:", error);
            return res.status(500).json({ 
                success: false, 
                message: 'Erro interno do servidor' 
            });
        }
    }

    async verificarSessao(req, res) {
        try {
            const { userId } = req.body;

            if (!userId) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'ID do usuário é obrigatório' 
                });
            }

            const usuario = await this.authService.findById(parseInt(userId));

            if (!usuario) {
                return res.status(404).json({ 
                    success: false, 
                    message: 'Usuário não encontrado' 
                });
            }

            return res.status(200).json({ success: true, usuario });
        } catch (error) {
            console.error("Erro ao verificar sessão:", error);
            return res.status(500).json({ 
                success: false, 
                message: 'Erro interno do servidor' 
            });
        }
    }
}
