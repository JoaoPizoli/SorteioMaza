import { prisma } from '../../prisma/prisma.config.js'

export default class AuthService {
    constructor() {
        this.prisma = prisma;
    }

    async login(username, senha) {
        try {
            const usuario = await this.prisma.usuario.findUnique({
                where: { username: username }
            });

            if (!usuario) {
                return { success: false, message: 'Usuário não encontrado' };
            }

            // Comparação simples de senha (sem criptografia para sistema interno simples)
            if (usuario.senha !== senha) {
                return { success: false, message: 'Senha incorreta' };
            }

            // Retorna os dados do usuário (sem a senha)
            const { senha: _, ...usuarioSemSenha } = usuario;
            return { success: true, usuario: usuarioSemSenha };
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw new Error("Falha na operação de login.");
        }
    }

    async findById(userId) {
        try {
            const usuario = await this.prisma.usuario.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    username: true,
                    nome: true,
                    role: true
                }
            });
            return usuario;
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw new Error("Falha ao buscar usuário.");
        }
    }
}
