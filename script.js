function gerarFraseAleatoria(){
const frases = [
    "Disciplina vence a motivação",
    "Cada dia é uma nova chance",
    "Pequenos passos geram grandes resultados",
    "Consistência é a chave do progresso",
    "Você é mais forte do que pensa",
    "Resultados exigem paciência e ação",
    "O esforço de hoje é o sucesso de amanhã",
    "Não espere, comece agora",
    "Seu foco define sua realidade",
    "Persistência transforma sonhos em metas",
    "Todo progresso começa com uma decisão",
    "Erros são degraus para o sucesso",
    "A constância supera a intensidade",
    "Coragem é agir mesmo com medo",
    "O impossível é apenas o não tentado",
    "Grandes conquistas exigem grandes esforços",
    "Não compare, apenas evolua",
    "A jornada importa tanto quanto o destino",
    "Cada esforço conta na sua evolução",
    "Você só perde quando desiste",
]
const numale = Math.floor(Math.random() * 20);
const frase = frases[numale]

document.getElementById('frase').innerHTML = frase
}