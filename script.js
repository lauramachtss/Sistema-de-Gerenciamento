// script.js
document.addEventListener('DOMContentLoaded', function() {
    const formCadastroProduto = document.getElementById('form-cadastro-produto');
    formCadastroProduto.addEventListener('submit', function(event) {
      event.preventDefault();
      const precoCompra = parseFloat(document.getElementById('preco-compra').value);
      const precoVenda = parseFloat(document.getElementById('preco-venda').value);
      const icms = parseFloat(document.getElementById('icms').value);
      const tipoPagamento = document.getElementById('tipo-pagamento').value;
  
      // Realizar operações com os valores obtidos do formulário
      // Por exemplo:
      const lucro = precoVenda - precoCompra;
      const imposto = (precoCompra * icms) / 100;
  
      console.log('Lucro:', lucro);
      console.log('Imposto:', imposto);
      console.log('Tipo de Pagamento:', tipoPagamento);
    });
  
    // Adicione lógica para outros formulários e funcionalidades aqui
  });
  