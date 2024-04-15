function calcularMedia(numeros) {
    // Verificar se o array está vazio
    if (numeros.length === 0) {
        return 0; // Se estiver vazio, retornar 0
    }

    // Calcular a soma de todos os números no array
    const soma = numeros.reduce((acc, num) => acc + num, 0);

    // Calcular a média dividindo a soma pelo número de elementos
    const media = soma / numeros.length;

    return media;
}

// Exemplo de uso:
const arrayDeNumeros = [10, 20, 30, 40, 50];
const media = calcularMedia(arrayDeNumeros);
console.log("A média é:", media);
