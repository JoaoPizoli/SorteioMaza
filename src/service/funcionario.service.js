import { prisma } from '../../prisma/prisma.config.js'

export default class FuncionarioService {
    constructor(){
        this.prisma = prisma;
    }

    async create(nome){
        try {
            const newFuncionario = await this.prisma.funcionarios.create({
                data: {
                    nome: nome
                }
            })
            return newFuncionario
        } catch (error) {
            console.error("Erro ao criar funcionário:", error);
            throw new Error("Falha na operação de criar Funcionário.");
        }
    }

    async findAll(){
        try {
            const users = await this.prisma.funcionarios.findMany();
            return users
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error);
            throw new Error("Falha na operação de busca de funcionários.");
        }
    }

    async findById(funcionarioId){
        try {
            const funcionario = await this.prisma.funcionarios.findFirst({
                where: { id: funcionarioId }
            })
            return funcionario
        } catch (error) {
            console.error("Erro ao buscar funcionário:", error)       
            throw new Error("Falha na operação de busca de funcionário por ID.");     
        }
    }

    async changePresenca(funcionarioId, presente) {
    try {
        const updated = await this.prisma.funcionarios.update({
        where: { id: funcionarioId },
        data: { presente },
        });

        return updated;
    } catch (error) {
        console.error("Erro ao alterar presença do funcionário: ", error);
        throw new Error("Falha na operação de confirmar presença!");
    }
    }

 
    async changeSorteado(funcionarioId){
        try {
            const funcionario = await this.prisma.funcionarios.update({
                data: { sorteado: true },
                where: {id: funcionarioId}
            })
            return funcionario
        } catch (error) {
            console.error("Erro ao alterar o status de Sorteado do funcionário:", error)       
            throw new Error("Falha na operação de alterar o status de Sorteado do Funcionário por ID.");            
        }
    }
}