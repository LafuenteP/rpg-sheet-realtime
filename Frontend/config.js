// config.js - Arquivo único de configuração

const SUPABASE_URL = 'https://jhktbogzlbjazfeddwla.supabase.co'; // Mantenha sua URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoa3Rib2d6bGJqYXpmZWRkd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMDA5MTEsImV4cCI6MjA4Mzg3NjkxMX0.7Om5p6w4GB6lOYBODigGuTOWWd3bq6uPBssw4cvFsUg'; // Mantenha sua KEY (NÃO APAGUE)

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- A MÁGICA ACONTECE AQUI ---
// 1. Tenta pegar o nome escrito no link (ex: site.com?nome=Neo)
const params = new URLSearchParams(window.location.search);
let nomeNaUrl = params.get('nome');

// 2. Se não tiver nada no link, usa 'Trinity' como padrão
const NOME_PERSONAGEM = nomeNaUrl || 'Trinity';

console.log(`✅ Ficha carregada para: ${NOME_PERSONAGEM}`);

// Pequeno aviso visual se estiver usando outro char
if(nomeNaUrl && document.body) {
    document.title = `Ficha - ${NOME_PERSONAGEM}`;
}