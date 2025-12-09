import express from 'express'
import FuncionariosController from '../controller/funcionarios.controller.js'
import PremiosController from '../controller/premios.controller.js'
import SorteioController from '../controller/sorteio.controller.js'
import AuthController from '../controller/auth.controller.js'


export const router = express.Router()

const funcionariosController = new FuncionariosController()
const premiosController = new PremiosController()
const sorteioController = new SorteioController()
const authController = new AuthController()

// Rotas de Autenticação
router.post('/auth/login', (req, res) => authController.login(req, res))
router.post('/auth/verificar', (req, res) => authController.verificarSessao(req, res))

// Rotas de Funcionários
router.post('/funcionarios', (req, res) => funcionariosController.create(req, res))
router.get('/funcionarios', (req, res) => funcionariosController.findAll(req, res))
router.get('/funcionarios/:id', (req, res) => funcionariosController.findById(req, res))
router.put('/funcionarios/presenca', (req, res) => funcionariosController.changePresenca(req, res))

// Rotas de Prêmios
router.post('/premios', (req, res) => premiosController.create(req, res))
router.get('/premios', (req, res) => premiosController.findAll(req, res))
router.get('/premios/:id', (req, res) => premiosController.findById(req, res))
router.put('/premios/reordenar', (req, res) => premiosController.reordenar(req, res))
router.delete('/premios/:id', (req, res) => premiosController.delete(req, res))

// Rotas de Sorteio
router.post('/sorteio', (req, res) => sorteioController.sortear(req, res))
router.get('/sorteios', (req, res) => sorteioController.findAll(req, res))
router.get('/sorteios/:id', (req, res) => sorteioController.findById(req, res))
router.put('/sorteios/:id/entregue', (req, res) => sorteioController.marcarEntregue(req, res))



