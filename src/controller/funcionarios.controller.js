import FuncionarioService from "../service/funcionario.service.js";
const funcionarioService = new FuncionarioService()


export default class FuncionariosController{
    async create(req, res){
        const { nome } = req.body;
        try {
            const newUser = await funcionarioService.create(nome)
            return res.status(201).json(newUser)
        } catch (error) {
            console.error("Erro no Controller (create):", error);
            return res.status(400).json({ error: "Não foi possível criar o Funcionário." });
        }
    }

    async findAll(req, res){
        try {
            const users = await funcionarioService.findAll();
            return res.status(200).json(users);
        } catch (error) {
            console.error("Erro no Controller (findAll):", error);
            return res.status(500).json({ error: "Não foi possivel listar os Funcionários!"})
        }
    }

    async findById(req, res){
        const { id } = req.body
        try {
            const funcionario = await funcionarioService.findById(id)
            return res.status(200).json(funcionario)
        } catch (error) {
            console.error("Erro no Controller (findById):", error)
        }
    }

    async changePresenca(req,res){
        const { funcionarioId, presente } = req.body
        try {
            const funcionario = await funcionarioService.changePresenca(funcionarioId, presente)
            res.status(200).json(funcionario)
        } catch (error) {
            console.error("Erro no Controller(changePresenca):", error)
            res.status(500).json({error: "Não foi possível alterar a presença do funcionario!"})
        }
    }
}