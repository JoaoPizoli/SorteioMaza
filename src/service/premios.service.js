import { prisma } from '../../prisma/prisma.config.js'

export default class PremiosService{
    constructor(){
        this.prisma = prisma; 
    }

    async create(premio, quantidade = 1){
        try {
            // Pega a maior ordem atual para colocar o novo prêmio no final
            const ultimaOrdem = await this.prisma.premios.findFirst({
                orderBy: { ordem: 'desc' },
                select: { ordem: true }
            });
            const novaOrdem = (ultimaOrdem?.ordem ?? -1) + 1;

            const newPremio = await this.prisma.premios.create({
                data: { 
                    premio: premio,
                    quantidade: quantidade,
                    ordem: novaOrdem
                 }
            })
            return newPremio
        } catch (error) {
            console.error("Erro ao criar premio:", error);
            throw new Error("Falha na operação de criar Premio.");
        }
    }

    async findAll(){
        try {
            const premios = await this.prisma.premios.findMany({
                orderBy: { ordem: 'asc' }
            })
            return premios
        } catch (error) {
            console.error("Erro ao buscar premios:", error);
            throw new Error("Falha na operação de buscar Premios.");
        }
    }

    async changeSorteado(premioId){
        try {
            // Busca o prêmio atual
            const premioAtual = await this.prisma.premios.findUnique({
                where: { id: premioId }
            });

            if (!premioAtual) {
                throw new Error("Prêmio não encontrado");
            }

            const novaQuantidadeSorteada = premioAtual.quantidadeSorteada + 1;
            const todosForamSorteados = novaQuantidadeSorteada >= premioAtual.quantidade;

            const premio = await this.prisma.premios.update({
                data: { 
                    quantidadeSorteada: novaQuantidadeSorteada,
                    sorteado: todosForamSorteados 
                }, 
                where: { id: premioId }
            })
            return premio
        } catch (error) {
            console.error("Erro ao alterar o Sorteado do Premio para True:", error);
            throw new Error("Falha na operação de alterar o Sorteado do Premio para True.");
        }
    }

    async updateOrdem(premioId, novaOrdem){
        try {
            const premio = await this.prisma.premios.update({
                data: { ordem: novaOrdem }, 
                where: { id: premioId }
            })
            return premio
        } catch (error) {
            console.error("Erro ao alterar a ordem do Premio:", error);
            throw new Error("Falha na operação de alterar a ordem do Premio.");
        }
    }

    async reordenarPremios(premiosOrdenados){
        try {
            // premiosOrdenados é um array de { id, ordem }
            const updates = premiosOrdenados.map(p => 
                this.prisma.premios.update({
                    where: { id: p.id },
                    data: { ordem: p.ordem }
                })
            );
            await Promise.all(updates);
            return { success: true };
        } catch (error) {
            console.error("Erro ao reordenar premios:", error);
            throw new Error("Falha na operação de reordenar Premios.");
        }
    }

    async delete(premioId){
        try {
            // Verifica se o prêmio existe
            const premio = await this.prisma.premios.findUnique({
                where: { id: premioId },
                include: { sorteios: true }
            });

            if (!premio) {
                throw new Error("Prêmio não encontrado");
            }

            // Verifica se já foi sorteado (tem sorteios vinculados)
            if (premio.sorteios && premio.sorteios.length > 0) {
                throw new Error("Não é possível excluir um prêmio que já foi sorteado");
            }

            await this.prisma.premios.delete({
                where: { id: premioId }
            });

            return { success: true };
        } catch (error) {
            console.error("Erro ao excluir premio:", error);
            throw error;
        }
    }
}