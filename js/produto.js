var registros = 0;
function apresentar() {
  registros = localStorage.length;
    var tabelaHTML = `
      <thead>
            <tr>
              <th scope="col">Imagem</th>
              <th scope="col">Produto</th>
              <th scope="col">Preço R$</th>
              <th scope="col">ID</th>
              <th scope="col"> # </th>
            </tr>
      </thead>
      <tbody>
  `;

  var itens = 0;

  for (var i = 0; i < registros; i++) {
    var item = localStorage.getItem("Linha " + i);
    if (item) {
      itens = item.split(",");
      var linhaHTML = "<tr>";
      for (var j = 0; j < itens.length; j++) {
        if (j == 0) {
          linhaHTML += '<td><img id="img" src="../img/' + itens[j] + '"></td>';
        } else {
          linhaHTML += "<td>" + itens[j] + "</td>";
        }
      }
      linhaHTML += "<td> <button class='btn btn-dark' onclick='comprar(\"" + item + "\")'> <i class='fa-solid fa-cart-shopping'></i> Adicionar </button></td></tr>";
      tabelaHTML += linhaHTML;
    }
  }
  tabelaHTML += '</tbody>'; // Fecha o corpo da tabela
  document.getElementById("lista-produtos").innerHTML = tabelaHTML;
}

apresentar();

var registrosCarrinho = 0;
function comprar(itens) {
  localStorage.setItem("Item " + registrosCarrinho, itens);
  registrosCarrinho++;
}