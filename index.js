// ORGANIZADOR DE TAREFAS E CALCULADOR DE PRIORIDADE //

// QUANTIDADE DE DIAS QUE PASSARAM ANTES DE CADA MÊS //
const janeiro = 0
const fevereiro = 31
const marco = 59
const abril = 90
const maio = 120
const junho = 151
const julho = 181
const agosto = 212
const setembro = 243
const outubro = 273
const novembro = 304
const dezembro = 334

// MATÉRIA E TAREFA //
const materia = "sociologia" 
const tarefa = "Figuras de linguagem"
let dificuldade

// DATAS //
const diaHoje = 20
const mesHoje = setembro
const nomeMesHoje = "setembro"

const diaEntrega = 6
const mesEntrega = outubro
const nomeMesEntrega = "outubro"

// CALCULO DE DIAS RESTANTES //
const hojeEmDias = mesHoje + diaHoje
const entregaEmDias = mesEntrega + diaEntrega
const diasRestantes = entregaEmDias - hojeEmDias

let prioridade

if (diasRestantes < 0) {
    prioridade = "Você perdeu o prazo de entrega."
} else if (diasRestantes <= 1) {
    prioridade = "Urgente"
} else if (diasRestantes <= 3) {
    prioridade = "Alta"
} else if (diasRestantes <= 7) {
    prioridade = "Média"
} else {
    prioridade = "Baixa"
}

// DIFICULDADE DAS MATERIAS //
if (materia === "arquitetura e manutencao de computadores") {
    dificuldade = "Difícil" 
} else if (materia === "arte") {
    dificuldade = "Fácil" 
} else if (materia === "biologia") {
    dificuldade = "Difícil"
} else if (materia === "educacao fisica") {
    dificuldade = "Fácil"
} else if (materia === "filosofia") {
    dificuldade = "Média"
} else if (materia === "fisica") {
    dificuldade = "Difícil" 
} else if (materia === "geografia") {
    dificuldade = "Média"
} else if (materia === "historia") {
    dificuldade = "Média"
} else if (materia === "html/css") {
    dificuldade = "Média"
} else if (materia === "espanhol") {
    dificuldade = "Fácil"
} else if (materia === "ingles") {
    dificuldade = "Fácil"
} else if (materia === "portugues") {
    dificuldade = "Média"
} else if (materia === "logica de programacao") {
    dificuldade = "Difícil"
} else if (materia === "matematica") {
    dificuldade = "Difícil"
} else if (materia === "planejamento de carreira") {
    dificuldade = "Fácil"
} else if (materia === "quimica") {
    dificuldade = "Fácil"
} else if (materia === "redacao") {
    dificuldade = "Média"
} else if (materia === "sociologia") { 
    dificuldade = "Fácil"
} else {
  dificuldade = "A dificuldade não pode ser declarada pois a matéria nao foi identificada, tente não usar letras maiúsculas nem acentuação."
}

const resumo = `
=================================================
ORGANIZADOR DE TAREFAS E CALCULADOR DE PRIORIDADE
=================================================
Matéria: ${materia}
Assunto da tarefa: ${tarefa}
Dificuldade da matéria: ${dificuldade}
Dia de hoje: ${diaHoje} de ${nomeMesHoje}
Prazo de entrega: ${diaEntrega} de ${nomeMesEntrega}
Dias restantes para entrega da atividade: ${diasRestantes} dias.
Prioridade: ${prioridade}
`

console.log(resumo)
