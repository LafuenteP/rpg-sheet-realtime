// biblioteca.js - Lista Completa das Habilidades do Sacramento
const BIBLIOTECA = [
    // =========================================================================
    // HABILIDADES DE COMBATE (Vermelho)
    // =========================================================================
    {
        titulo: "Armas da Natureza",
        tipo: "combate",
        descricao: "Você prefere lutar com métodos 'ultrapassados'. Sempre que lutar usando armas rústicas (facas de pedra, lanças, machadinhas), o dano do ataque aumenta em <b>1💀</b> para cada ponto em Físico que tiver."
    },
    {
        titulo: "Ataque Sacana",
        tipo: "combate",
        descricao: "Ao realizar um <b>ataque surpresa</b> usando facas, navalhas ou lâminas ocultas, o golpe causa dano adicional conforme seu nível.",
        tabela: [
            { col1: "Nível 1", col2: "1 💀 Dano" },
            { col1: "Nível 3", col2: "2 💀 Dano" },
            { col1: "Nível 6", col2: "3 💀 Dano" }
        ]
    },
    {
        titulo: "Briga de Bar",
        tipo: "combate",
        descricao: "Você sabe improvisar armas (cadeira, garrafa). Objetos pequenos/médios causam <b>3👊</b>. Objetos grandes causam <b>1💀</b> (com -1 no teste de Violência)."
    },
    {
        titulo: "Coldre de Sabão",
        tipo: "combate",
        descricao: "Na Iniciativa, você pode puxar duas cartas e escolher a que quiser (maior ou menor) de acordo com sua estratégia."
    },
    {
        titulo: "Dedo Quente",
        tipo: "combate",
        descricao: "Sempre que atirar com um revólver, recebe <b>+1 nos Testes de Violência</b>. Além disso, contra alvos sem cobertura, o dano aumenta conforme seu nível.",
        tabela: [
            { col1: "Nível 1", col2: "1 👊 Dano" },
            { col1: "Nível 3", col2: "2 💀 Dano" },
            { col1: "Nível 6", col2: "3 💀 Dano" }
        ]
    },
    {
        titulo: "Fúria dos Aflitos",
        tipo: "combate",
        descricao: "Em combate, você reduz sua Defesa em 1 ponto e aumenta o dano de seus ataques corpo a corpo em <b>3👊</b>."
    },
    {
        titulo: "Gatilho Furioso",
        tipo: "combate",
        descricao: "Você dispara dois tiros na mesma Ação de Combate, mas precisa gastar um Movimento para 'martelar o cão'. Se tiver ações suficientes, pode atirar várias vezes até descarregar (precisa de uma Ação para recarregar)."
    },
    {
        titulo: "Livramento",
        tipo: "combate",
        descricao: "Quando riscar todos os seus 💀, caia no chão, recupere <b>2💀</b> e permaneça vivo. Se cair outra vez no mesmo combate, acabou a colher de chá."
    },
    {
        titulo: "Marretada",
        tipo: "combate",
        descricao: "Quando luta de mãos vazias, o dano de seus socos e chutes aumenta em <b>+1👊</b> para cada ponto no Atributo Físico que tiver."
    },
    {
        titulo: "Parrudeza",
        tipo: "combate",
        descricao: "Você tem o couro grosso. Soma <b>2💀</b> à sua vida máxima. Esta Habilidade pode ser escolhida várias vezes.",
        bonusVida: 2,
        podeRepetir: true
    },
    {
        titulo: "Punhos do Oriente",
        tipo: "combate",
        descricao: "Você se tornou uma máquina de socos e chutes. Você pode usar seus <b>Movimentos</b> para realizar ataques desarmados."
    },
    {
        titulo: "Quebra-Ossos",
        tipo: "combate",
        descricao: "Golpes de luta livre (suplex, agarrão). Gaste 1 Movimento + 1 Ação de Combate para imobilizar ou potencializar o dano.",
        tabela: [
            { col1: "Nível 1", col2: "1 💀 + 1 👊" },
            { col1: "Nível 3", col2: "1 💀 + 2 👊" },
            { col1: "Nível 6", col2: "2 💀 + 3 👊" }
        ]
    },
    {
        titulo: "Sorte dos Covardes",
        tipo: "combate",
        descricao: "No começo do combate, puxe uma carta. O efeito dura até o fim do combate. (Limita Int a 1 e Vio a 2).",
        tabela: [
            { col1: "♣ Paus", col2: "+2 Ações de Combate" },
            { col1: "♥ Copas", col2: "+2 Vida (💀)" },
            { col1: "♠ Espadas", col2: "+2 Movimentos" },
            { col1: "♦ Ouros", col2: "+1 Testes de Violência" }
        ]
    },
    {
        titulo: "Valei-me",
        tipo: "combate",
        descricao: "Improvise explosivos. Teste de Tradição para fabricar (gasta 2 Ações + 1 Movimento). O dano aumenta conforme seu nível.",
        tabela: [
            { col1: "Nível 1", col2: "2 💀 Dano" },
            { col1: "Nível 3", col2: "3 💀 Dano" },
            { col1: "Nível 6", col2: "4 💀 Dano" }
        ]
    },
    {
        titulo: "Zói de Gavião",
        tipo: "combate",
        descricao: "Com fuzil ou arco longo, recebe <b>+1 em Testes de Violência</b>. Em posição vantajosa, o dano aumenta conforme a tabela.",
        tabela: [
            { col1: "Nível 1", col2: "1 💀 Dano" },
            { col1: "Nível 3", col2: "2 💀 Dano" },
            { col1: "Nível 6", col2: "3 💀 Dano" }
        ]
    },

    // =========================================================================
    // HABILIDADES DE PROFISSÃO (Amarelo)
    // =========================================================================
    {
        titulo: "Às na Manga",
        tipo: "profissao",
        descricao: "Ao fazer Testes envolvendo jogos de cartas e blefe, jogue 2d6 e use o melhor resultado."
    },
    {
        titulo: "Boca na Botija",
        tipo: "profissao",
        descricao: "Ao fazer Testes de Atenção, jogue 2d6 e use o melhor resultado. Sua Defesa não é reduzida por ficar surpreso."
    },
    {
        titulo: "Canção da Emoção",
        tipo: "profissao",
        descricao: "Uma vez por sessão, gaste duas Ações de Combate por cada PJ para conceder bônus a todos eles.",
        tabela: [
            { col1: "Nível 1", col2: "+1 Movimento" },
            { col1: "Nível 3", col2: "+1 Ação de Combate" },
            { col1: "Nível 4", col2: "+1 em Violência" },
            { col1: "Nível 6", col2: "+3 👊 Temporários" }
        ]
    },
    {
        titulo: "Chamego",
        tipo: "profissao",
        descricao: "Ao fazer testes para laçar algo/alguém, jogue 2d6 e use o melhor resultado. Seus nós não dão penalidade de -1 para quem tenta escapar."
    },
    {
        titulo: "Cuspe e Cola",
        tipo: "profissao",
        descricao: "Precisa estar colado no paciente. Gasta 2 Ações de Combate para cada 💀 curada. O limite de usos aumenta com o nível.",
        tabela: [
            { col1: "Nível 1", col2: "1 uso/combate" },
            { col1: "Nível 3", col2: "2 usos/combate" },
            { col1: "Nível 6", col2: "4 usos/combate" }
        ]
    },
    {
        titulo: "Fogo no Céu",
        tipo: "profissao",
        descricao: "Ao fazer Testes envolvendo explosivos, jogue 2d6 e use o melhor resultado. Não corre risco de explodir em falha crítica."
    },
    {
        titulo: "Fumaça na Água",
        tipo: "profissao",
        descricao: "Ao fazer Testes de Roubo para afanar, se esconder ou caminhar na quietude, jogue 2d6 e use o melhor resultado."
    },
    {
        titulo: "Galope Certeiro",
        tipo: "profissao",
        descricao: "Ao fazer Testes de Montaria no lombo do próprio cavalo, jogue 2d6 e use o melhor resultado. Ignora penalidade com outros animais."
    },
    {
        titulo: "Não Vai Doer Nadinha",
        tipo: "profissao",
        descricao: "Ao fazer testes de Medicina, jogue 2d6 e use o melhor resultado. Sua cura aumenta conforme a tabela.",
        tabela: [
            { col1: "Nível 1", col2: "Cura 1 💀" },
            { col1: "Nível 3", col2: "Cura 2 💀" },
            { col1: "Nível 6", col2: "Cura 4 💀" }
        ]
    },
    {
        titulo: "Natural da Natureza",
        tipo: "profissao",
        descricao: "Sempre que fizer Testes de Suor (sobrevivência), jogue 2d6 e use o melhor resultado. Não precisa testar para plantas/abrigo."
    },
    {
        titulo: "Sabiá Imperatriz",
        tipo: "profissao",
        descricao: "Ao fazer Testes de Negócios (convencer, seduzir, obter info), jogue 2d6 e use o melhor resultado."
    },
    {
        titulo: "Sabugos e Peçonhas",
        tipo: "profissao",
        descricao: "Produz venenos eficientes. Causam <b>1👊</b> a cada ação feita pelo alvo envenenado (se atirar, sofre 1👊 de dor)."
    },
    {
        titulo: "Salve-se Quem Puder",
        tipo: "profissao",
        descricao: "Ao fazer qualquer Teste para escapar ou fugir, jogue 2d6 e use o melhor resultado. Recebe +1 Movimento exclusivo para fugir."
    },
    {
        titulo: "Sorrisão, Chapéu na Mão",
        tipo: "profissao",
        descricao: "Sempre que comprar itens comuns, ganha 25% de desconto. Ao vender, ganha 25% a mais."
    },
    {
        titulo: "Zói de Coruja",
        tipo: "profissao",
        descricao: "Sempre que fizer um Teste de Tradição para lembrar de algum conhecimento, jogue 2d6 e use o melhor resultado."
    }
];