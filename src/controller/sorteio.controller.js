import SorteioService from "../service/sorteio.service.js";
const sorteioService = new SorteioService()

export default class SorteioController{
    async create(req, res){
        const { premioId, funcionarioId } = req.body
        try {
            const sorteio = await sorteioService.create(premioId, funcionarioId) 
            res.status(201).json(sorteio)           
        } catch (error) {
            console.error("Erro no Controller (create):", error);
            return res.status(400).json({ error: "Não foi possível criar o Sorteio." });             
        }
    }

    async findAll(req, res){
        try {
            const sorteios = await sorteioService.findAll()
            res.status(200).json(sorteios)
        } catch (error) {
            console.error("Erro no Controller (findAll):", error);
            return res.status(400).json({ error: "Não foi possível listar os Sorteios." }); 
        }
    }

    async findById(req, res){
        const { id } = req.body
        try {
            const sorteio = await sorteioService.findById(id)
            res.status(200).json(sorteio)
        } catch (error) {
            console.error("Erro no Controller (findById):", error);
            return res.status(400).json({ error: "Não foi possível listar o Sorteio por ID." });             
        }
    }

    async sortear(req, res){
        const { premioId, funcionarioId } = req.body;
        
        if (!premioId) {
            return res.status(400).json({ error: "O prêmio é obrigatório para realizar o sorteio!" });
        }

        if (!funcionarioId) {
            return res.status(400).json({ error: "O funcionário é obrigatório para realizar o sorteio!" });
        }

        try {
            const sorteio = await sorteioService.sortear(premioId, funcionarioId);
            return res.status(200).json(sorteio);
        } catch (error) {
            console.error("Erro no Controller (sortear):", error);
            if (error.message === 'Funcionário não disponível para sorteio' || 
                error.message === 'Prêmio não disponível para sorteio') {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ error: "Não foi possível realizar o sorteio!" });
        }
    }

    async marcarEntregue(req, res) {
        const { id } = req.params;
        const { entregue } = req.body;

        try {
            const sorteio = await sorteioService.marcarEntregue(parseInt(id), entregue);
            return res.status(200).json(sorteio);
        } catch (error) {
            console.error("Erro no Controller (marcarEntregue):", error);
            return res.status(500).json({ error: "Não foi possível atualizar o status de entrega." });
        }
    }
}