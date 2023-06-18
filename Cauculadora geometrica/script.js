function calcularAreaTriangulo() {
  const base = prompt("informe a base do triângulo");
  const altura = prompt("Informe a altura do triângulo");
  return (base * altura) / 2;
}
function calcularAreaRetangulo() {
  const base = prompt("informe a base do Retângulo");
  const altura = prompt("Informe a altura do Retângulo");
  return base * altura;
}
function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do Quadrado");
  return lado * lado;
}
function CalcularAreaTrapezio() {
  const ladoMaior = parseFloat(prompt("Informe o lado maior do trapézio"));
  const ladoMenor = parseFloat(prompt("Informe o lado menor do trapézio"));
  const altura = prompt("Informe a altura do trapézio");
  return ((ladoMaior + ladoMenor) * altura) / 2;
}
function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do circulo");
  return raio * raio * 3.14;
}

function exibirMenu() {
  return prompt(
    "Calculadora geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de circulo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = CalcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo ...");
        break;
      default:
        alert("Opção invalida!");
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
