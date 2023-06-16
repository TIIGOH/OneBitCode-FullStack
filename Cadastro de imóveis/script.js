const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo(a) ao cadastro de imóveis!\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis cadastrados\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt(" Informe o nome do proprietário:");
      imovel.quartos = prompt("Informe a quantidade de quartos:");
      imovel.banheiro = prompt("Informe a quantidade de banheiros:");
      imovel.garagem = prompt("Informe se o imóvel possui garagem: (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nPropietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiro +
          "\nPossui garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu!");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel" +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiro +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcao !== "3");
