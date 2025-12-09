import PremiosService from "../service/premios.service.js";
const premiosService = new PremiosService()

export default class PremiosController{
    async create(req, res){
        const { premio, quantidade } = req.body
        try {
            const newPremio = await premiosService.create(premio, quantidade || 1)
            res.status(201).json(newPremio)
        } catch (error) {
            console.error("Erro no Controller (create):", error);
            return res.status(400).json({ error: "Não foi possível criar o Premio." });           
        }
    }

    async findAll(req, res){
        try {
            const premios = await premiosService.findAll()
            res.status(200).json(premios)
        } catch (error) {
            console.error("Erro no Controller (findAll):", error);
            return res.status(400).json({ error: "Não foi possível listar todos os Premios." });            
        }
    }

    async changeSorteado(req, res){
        const { premioId } = req.body
        try {
            const premio = await premiosService.changeSorteado(premioId);
            res.status(200).json(premio)
        } catch (error) {
            console.error("Erro no Controller (changeSorteado):", error);
            return res.status(400).json({ error: "Não foi possível alterar o status de Sorteado para o Premio!" });              
        }
    }

    async reordenar(req, res){
        const { premios } = req.body
        try {
            const result = await premiosService.reordenarPremios(premios);
            res.status(200).json(result)
        } catch (error) {
            console.error("Erro no Controller (reordenar):", error);
            return res.status(400).json({ error: "Não foi possível reordenar os Premios!" });              
        }
    }

    async delete(req, res){
        const { id } = req.params
        try {
            const result = await premiosService.delete(parseInt(id));
            res.status(200).json(result)
        } catch (error) {
            console.error("Erro no Controller (delete):", error);
            return res.status(400).json({ error: error.message || "Não foi possível excluir o Premio!" });              
        }
    }
}