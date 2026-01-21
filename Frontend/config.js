// config.js - Arquivo único de configuração

// 1. Suas Chaves (Só precisa alterar aqui agora)
const SUPABASE_URL = 'https://jhktbogzlbjazfeddwla.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoa3Rib2d6bGJqYXpmZWRkd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMDA5MTEsImV4cCI6MjA4Mzg3NjkxMX0.7Om5p6w4GB6lOYBODigGuTOWWd3bq6uPBssw4cvFsUg'; // <--- Cole sua chave aqui UMA VEZ só

// 2. Inicializa o cliente (disponível para todas as páginas)
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 3. Configurações Globais do Jogo
const NOME_PERSONAGEM = 'Trinity'; 

console.log("✅ Supabase carregado via config.js");