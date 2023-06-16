const numero = prompt(
  " Olá, eu sou o robô da tabuada, informe um número que você deseja calcular a tabuada: "
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + "*" + fator + "=" + numero * fator + "\n";
}

alert("resultado da tabuada de " + numero + ":\n\n" + resultado);
