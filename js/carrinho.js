var registros = localStorage.length;

function apresentarCarrinho () {

    var tabelaHTML = `
      <thead>
            <tr>
              <th scope="col">Imagem</th>
              <th scope="col">Produto</th>
              <th scope="col">Preço R$</th>
              <th scope="col">ID</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Subtotal</th>
              <th scope="col">#</th>
            </tr>
      </thead>
      <tbody>
  `;

  var itens = 0;

  for (var i = 0; i < registros; i++) {
    var item = localStorage.getItem("Item " + i);
    if (item) {
      itens = item.split(",");
      var linhaHTML = "<tr>";

      for (var j = 0; j < itens.length; j++) {
        if (j == 0) {
          linhaHTML += '<td><img id="img" src="../img/' + itens[j] + '"></td>';
        } 
        else {
          linhaHTML += "<td>" + itens[j] + "</td>";
        }
      }
    
    linhaHTML += "<td> <input type='number' size='6' value='1' id='qtd" + i + "' min='1' onclick='calcularSubTotal(\"" + item + "\")'/> </td>";
    linhaHTML += "<td id='subTotal" + i + "'>" + itens[2] + "</td>";
    linhaHTML += "<td> <button class='btn btn-danger' onclick='excluir(\"" + i + "\")'>Excluir</button> </td> </tr>";
    tabelaHTML += linhaHTML;
    
  }
  tabelaHTML += "</tbody>"; // Fecha o corpo da tabela
  document.getElementById("lista-carrinho").innerHTML = tabelaHTML;

} 
}

function calcularSubTotal (item) {
  var total = 0;

  for (var i = 0; i < registros; i++) {
    
    var item = localStorage.getItem("Item " + i);
    if (item) {
      var itens = item.split(",");
      var preco = itens[2]; // Preço do item
      //console.log(preco);

      var quantidade = parseInt(document.getElementById("qtd" + i).value); // Acessa o campo correto | Quantidade do item
      //console.log(quantidade);
      
      var subtotal = preco * quantidade; // Subtotal do item
      total += subtotal;  // Acumula o total
      document.getElementById("subTotal" + i).innerHTML = subtotal.toFixed(2); // Atualiza o subtotal do item

     
    }
  }

    // Atualiza o total final no HTML
    document.getElementById("totalCarrinho").innerHTML = 'R$' + total.toFixed(2);
    localStorage.setItem ("Total", total);

}

apresentarCarrinho();
calcularSubTotal();

var vetor = [];
function finalizar () {
  for (var i = 0; i < registros; i++) {
    var itemLocal = localStorage.getItem("Item " + i);
    if (itemLocal) {
      var itens = itemLocal.split(",");
      var preco = itens[2];
      var quantidade = parseInt(document.getElementById("qtd" + i).value); 
      var subtotal = (preco * quantidade).toFixed(2); 

      vetor.push ({
        imagem: itens[0],
        produto: itens[1],
        preco: preco,
        id: itens [3],
        quantidade: quantidade,
        subtotal: subtotal
      });

      console.log(vetor);
    }
  }

  localStorage.setItem("Compra", JSON.stringify (vetor));
    
  if (localStorage.getItem("Total") != 0) {
    alert ("Compra finalizada com sucesso!");
    location.href = "detalhesCompra.html";
  } else {
    alert ("Nenhum produto comprado!");
  }
}

function excluir(i) {
  localStorage.removeItem ("Item " + i);

  apresentarCarrinho();
  calcularSubTotal();
}
