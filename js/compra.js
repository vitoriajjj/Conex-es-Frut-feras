var registros = localStorage.length;

function apresentarCompra () {
    var tabelaHTML = '';
    var itens = 0;

    var item = localStorage.getItem("Compra");
    
    if (item) {
        var vetor = JSON.parse (item);

      for (var i = 0; i < vetor.length; i++) {
        var itens = vetor[i]; 
        var linhaHTML =`<tr>
        <td> <img id="img" src="../img/${itens.imagem}"> </td>
        <td> ${itens.produto} </td>
        <td> ${itens.preco} </td>
        <td> ${itens.id} </td>
        <td> ${itens.quantidade} </td>
        <td> ${itens.subtotal} </td>
    </tr>
    `;
        tabelaHTML += linhaHTML;
        }
      }
   
    document.getElementById("lista-compra").innerHTML = tabelaHTML;
    document.getElementById("total").innerHTML = 'R$' + parseFloat (localStorage.getItem ("Total")).toFixed(2);
}

apresentarCompra();