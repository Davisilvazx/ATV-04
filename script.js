const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => {
  const quadrado = numero ** 2;
  console.log(quadrado);
});

//PROF, FIZ POR DOIS MÉTODOS
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(numero => numero ** 2);
quadrados.forEach(quadrado => {
  console.log(quadrado);
});
