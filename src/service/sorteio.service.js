import { prisma } from '../../prisma/prisma.config.js'

export default class SorteioService{
    constructor(){
        this.prisma = prisma;
    }

    async create(premioId, funcionarioId){
        try {
            const newSorteio = await this.prisma.sorteio.create({
                data: {
                    premioId: premioId,
                    funcionarioId: funcionarioId
                }
            })
            return newSorteio
        } catch (error) {
            console.error("Erro ao criar sorteios:", error);
            throw new Error("Falha na operação de criar Sorteio.");            
        }
    }

    async findAll(){
        try {
            const sorteios = await this.prisma.sorteio.findMany({
                include: { ganhador: true, premio: true }
            })
            return sorteios 
        } catch (error) {
            console.error("Erro ao buscar Sorteios:", error);
            throw new Error("Falha na operação de Buscar todos os Sorteios.");
        }
    }

    async findById(sorteioId){
        try {
            const sorteio = await this.prisma.sorteio.findFirst({
                where: { id: sorteioId },
                include: { ganhador: true, premio: true }
            })
            return sorteio
        } catch (error) {
            console.error("Erro ao buscar Sorteio por ID:", error);
            throw new Error("Falha na operação de buscar Sorteio por ID.");
        }
    }

    async sortear(premioId, funcionarioId){
        try {
            // Verifica se o funcionário existe e está disponível
            const funcionario = await this.prisma.funcionarios.findFirst({
                where: { id: funcionarioId, sorteado: false, presente: true, convidado: false }
            });

            if (!funcionario) {
                throw new Error('Funcionário não disponível para sorteio');
            }

            // Verifica se o prêmio existe e ainda tem unidades disponíveis
            const premio = await this.prisma.premios.findFirst({
                where: { id: premioId }
            });

            if (!premio) {
                throw new Error('Prêmio não encontrado');
            }

            // Verifica se ainda há unidades disponíveis para sortear
            if (premio.quantidadeSorteada >= premio.quantidade) {
                throw new Error('Todas as unidades deste prêmio já foram sorteadas');
            }

            // Marca o funcionário como sorteado
            await this.prisma.funcionarios.update({
                where: { id: funcionarioId },
                data: { sorteado: true }
            });

            // Incrementa a quantidade sorteada e marca como sorteado se todas foram sorteadas
            const novaQuantidadeSorteada = premio.quantidadeSorteada + 1;
            const todosForamSorteados = novaQuantidadeSorteada >= premio.quantidade;

            await this.prisma.premios.update({
                where: { id: premioId },
                data: { 
                    quantidadeSorteada: novaQuantidadeSorteada,
                    sorteado: todosForamSorteados 
                }
            });

            // Cria o registro do sorteio
            const sorteio = await this.prisma.sorteio.create({
                data: {
                    funcionarioId: funcionarioId,
                    premioId: premioId
                },
                include: {
                    ganhador: true,
                    premio: true
                }
            });

            return sorteio;
        } catch (error) {
            console.error("Erro ao realizar sorteio:", error);
            throw error;
        }
    }

    async marcarEntregue(sorteioId, entregue) {
        try {
            const sorteio = await this.prisma.sorteio.update({
                where: { id: sorteioId },
                data: { entregue: entregue },
                include: {
                    ganhador: true,
                    premio: true
                }
            });
            return sorteio;
        } catch (error) {
            console.error("Erro ao marcar como entregue:", error);
            throw new Error("Falha ao atualizar status de entrega.");
        }
    }
}