// Importando o pacote readline, pra gente conseguir ler o que o usuário digitar no terminal
import readline from 'readline';

// Inicializando o readline. É ele que vai ler o que o usuário digitar.
const rl = readline.createInterface({
    input: process.stdin,  // entrada padrão, ou seja, o teclado
    output: process.stdout  // saída padrão, ou seja, o terminal
});

// Uma array vazia que vai guardar as propriedades CSS que o usuário digitar
const propriedadesCSS = [];

// Função pra perguntar pro usuário qual propriedade CSS ele quer adicionar na lista
const perguntaPropriedade = () => {
    rl.question('Adicione uma propriedade CSS ou digite "SAIR" para finalizar: ', (propriedade) => {
        // Se o usuário digitou 'SAIR', a gente mostra a lista ordenada e fecha o programa
        if (propriedade.toUpperCase() === 'SAIR') {
            // Ordena as propriedades em ordem alfabética.
            const propriedadesOrdenadas = propriedadesCSS.sort();
            console.log('Tudo ordenado:');
            // Mostra cada propriedade, uma por linha
            propriedadesOrdenadas.forEach((prop) => console.log(prop));
            rl.close();  // Fecha o readline
        } else {
            // Se não, adiciona a propriedade na lista e pergunta de novo
            propriedadesCSS.push(propriedade);
            perguntaPropriedade();
        }
    });
};

// Chama a função pela primeira vez pra começar o loop de perguntas
perguntaPropriedade();
