import express from 'express'
import FuncionariosController from '../controller/funcionarios.controller.js'
import PremiosController from '../controller/premios.controller.js'
import SorteioController from '../controller/sorteio.controller.js'
import AuthController from '../controller/auth.controller.js'
import AdminController from '../controller/admin.controller.js'


export const router = express.Router()

const funcionariosController = new FuncionariosController()
const premiosController = new PremiosController()
const sorteioController = new SorteioController()
const authController = new AuthController()
const adminController = new AdminController()

// Rotas de Autenticação
router.post('/auth/login', (req, res) => authController.login(req, res))
router.post('/auth/verificar-sessao', (req, res) => authController.verificarSessao(req, res))

// Rotas de Funcionários
router.post('/funcionarios/create', (req, res) => funcionariosController.create(req, res))
router.get('/funcionarios', (req, res) => funcionariosController.findAll(req, res))
router.get('/funcionarios/:id', (req, res) => funcionariosController.findById(req, res))
router.put('/funcionarios/presenca', (req, res) => funcionariosController.changePresenca(req, res))

// Rotas de Prêmios
router.post('/premios/create', (req, res) => premiosController.create(req, res))
router.get('/premios', (req, res) => premiosController.findAll(req, res))
router.get('/premios/:id', (req, res) => premiosController.findById(req, res))
router.put('/premios/reordenar', (req, res) => premiosController.reordenar(req, res))
router.delete('/premios/:id', (req, res) => premiosController.delete(req, res))

// Rotas de Sorteio
router.post('/sorteio', (req, res) => sorteioController.sortear(req, res))
router.get('/sorteios', (req, res) => sorteioController.findAll(req, res))
router.get('/sorteios/:id', (req, res) => sorteioController.findById(req, res))
router.put('/sorteios/:id/entregue', (req, res) => sorteioController.marcarEntregue(req, res))

// Rotas Admin (Banco de Dados)
router.post('/admin/sql', (req, res) => adminController.runQuery(req, res))
router.get('/admin/history', (req, res) => adminController.getHistory(req, res))
router.get('/admin/notepad', (req, res) => adminController.getNotepad(req, res))
router.post('/admin/notepad', (req, res) => adminController.saveNotepad(req, res))
