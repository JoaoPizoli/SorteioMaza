import { prisma } from '../../prisma/prisma.config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HISTORY_FILE = path.join(__dirname, '../../sql_history.json');

export default class AdminController {

    async runQuery(req, res) {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({ error: "Query é obrigatória." });
        }

        try {
            const queryTrimmed = query.trim().toLowerCase();
            let result;

            // Simple heuristic to distinguish SELECT from others
            if (queryTrimmed.startsWith('select')) {
                result = await prisma.$queryRawUnsafe(query);
            } else {
                result = await prisma.$executeRawUnsafe(query);
            }

            // Save to history
            this.saveHistory(query, true);

            // Convert BigInt to string for JSON serialization
            const resultStringified = JSON.stringify(result, (key, value) =>
                typeof value === 'bigint'
                    ? value.toString()
                    : value
            );

            return res.status(200).json({ success: true, data: JSON.parse(resultStringified) });

        } catch (error) {
            console.error("Erro ao executar query:", error);
            this.saveHistory(query, false, error.message);
            return res.status(400).json({ success: false, error: error.message });
        }
    }

    async getHistory(req, res) {
        try {
            if (!fs.existsSync(HISTORY_FILE)) {
                return res.status(200).json([]);
            }
            const history = fs.readFileSync(HISTORY_FILE, 'utf8');
            return res.status(200).json(JSON.parse(history));
        } catch (error) {
            console.error("Erro ao ler histórico:", error);
            return res.status(500).json({ error: "Erro ao ler histórico." });
        }
    }

    saveHistory(query, success, errorMessage = null) {
        try {
            let history = [];
            if (fs.existsSync(HISTORY_FILE)) {
                history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
            }

            const entry = {
                timestamp: new Date().toISOString(),
                query,
                success,
                error: errorMessage
            };

            history.unshift(entry); // Add to beginning

            // Keep only last 100 entries
            if (history.length > 100) {
                history = history.slice(0, 100);
            }

            fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
        } catch (error) {
            console.error("Erro ao salvar histórico:", error);
        }
    }

    async getNotepad(req, res) {
        const NOTEPAD_FILE = path.join(__dirname, '../../sql_notepad.json');
        try {
            if (!fs.existsSync(NOTEPAD_FILE)) {
                return res.status(200).json({ content: "" });
            }
            const content = fs.readFileSync(NOTEPAD_FILE, 'utf8');
            return res.status(200).json(JSON.parse(content));
        } catch (error) {
            console.error("Erro ao ler bloco de notas:", error);
            return res.status(500).json({ error: "Erro ao ler bloco de notas." });
        }
    }

    async saveNotepad(req, res) {
        const NOTEPAD_FILE = path.join(__dirname, '../../sql_notepad.json');
        const { content } = req.body;
        try {
            fs.writeFileSync(NOTEPAD_FILE, JSON.stringify({ content }, null, 2));
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error("Erro ao salvar bloco de notas:", error);
            return res.status(500).json({ error: "Erro ao salvar bloco de notas." });
        }
    }
}
