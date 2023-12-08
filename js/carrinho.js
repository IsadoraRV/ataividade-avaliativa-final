// Lista de itens do carrinho
var carrinhoItens = [];

// Função para atualizar o conteúdo do carrinho e o total
function atualizarCarrinho() {
    // Limpar a lista de itens
    $("#carrinho").empty();

    // Adicionar cada item à lista
    for (var i = 0; i < carrinhoItens.length; i++) {
        $("#carrinho").append("<li>" + carrinhoItens[i].nome + " - R$" + carrinhoItens[i].preco.toFixed(2) + "</li>");
    }

    // Calcular o total
    var total = 0;
    for (var i = 0; i < carrinhoItens.length; i++) {
        total += carrinhoItens[i].preco;
    }

    // Atualizar o total na página
    $("#total").text(total.toFixed(2));
}

// Adicionar um item ao carrinho quando o botão for clicado
$("#adicionarItem").click(function() {
    var nomeItem = prompt("Digite o nome do item:");
    var precoItem = parseFloat(prompt("Digite o preço do item:"));

    // Verificar se o preço é um número válido
    if (!isNaN(precoItem)) {
        // Adicionar o item ao carrinho
        carrinhoItens.push({ nome: nomeItem, preco: precoItem });

        // Atualizar o conteúdo do carrinho
        atualizarCarrinho();
    } else {
        alert("Por favor, digite um preço válido.");
    }
});