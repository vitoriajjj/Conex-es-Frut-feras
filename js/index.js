var linha = [];

function adicionar () {
    linha = [];

    document.getElementById('erro').innerHTML = '';

    try {
        if (document.getElementById ('imagem').files[0].name == '') throw 'O campo IMAGEM não deve ser vazio!';

        if (!(isNaN (document.getElementById ('nome').value)) && (document.getElementById ('nome').value != ''))  
            throw 'Digite um texto no campo PRODUTO!';
        if (document.getElementById ('nome').value == '') throw 'O campo para o PRODUTO não deve ser vazio!';

        if (document.getElementById ('preco').value == '') throw 'O campo para o PREÇO não deve ser vazio!';
        if (document.getElementById ('preco').value <= 0) throw 'O PREÇO deve ser maior que 0 (zero)!';

        if (document.getElementById ('idProd').value == '') throw 'O campo para o ID não deve ser vazio!';
        if (document.getElementById ('idProd').value <= 0) throw 'O ID deve ser maior que 0 (zero)!';
        
        linha.push (document.getElementById ('imagem').files[0].name);
        linha.push (document.getElementById ('nome').value);
        linha.push (parseFloat (document.getElementById ('preco').value).toFixed(2));
        linha.push (document.getElementById ('idProd').value);

        alert("Informações Cadastradas!");

        var registrosCarrinho = localStorage.length;
        localStorage.setItem ("Linha " + registrosCarrinho, linha);
        

        document.getElementById ('imagem').value = '';
        document.getElementById ('nome').value = '';
        document.getElementById ('preco').value = '';
        document.getElementById ('idProd').value = '';

    } catch (erro) {
        document.getElementById ('erro').innerHTML = erro;
    }
}

function limpar () {
    alert("Informações limpadas!");
    localStorage.clear();
}