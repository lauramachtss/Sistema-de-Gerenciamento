const btnAbrirCadastroProduto = document.getElementById('btnAbrirCadastroProduto');
const btnAbrirVendaProduto = document.getElementById('btnAbrirVendaProduto');
const btnAbrirCadastroCliente = document.getElementById('btnAbrirCadastroCliente');
const btnAbrirCadastroFornecedor = document.getElementById('btnAbrirCadastroFornecedor');
const btnAbrirCadastroBens = document.getElementById('btnAbrirCadastroBens');
const btnGerarRelatorios = document.getElementById('btnGerarRelatorios');
const modalCadastroProduto = document.getElementById('modalCadastroProduto');
const modalVendaProduto = document.getElementById('modalVendaProduto');
const modalCadastroCliente = document.getElementById('modalCadastroCliente');
const modalCadastroFornecedor = document.getElementById('modalCadastroFornecedor');
const modalCadastroBens = document.getElementById('modalCadastroBens');
const modalRelatorios = document.getElementById('modalRelatorios');
const formCadastroProduto = document.getElementById('formCadastroProduto');
const formCadastroCliente = document.getElementById('formCadastroCliente');
const formCadastroFornecedor = document.getElementById('formCadastroFornecedor');
const formCadastroBens = document.getElementById('formCadastroBens');
const formVendaProduto = document.getElementById('formVendaProduto');

btnAbrirCadastroProduto.addEventListener('click', () => showModal(modalCadastroProduto));
btnAbrirVendaProduto.addEventListener('click', () => showModal(modalVendaProduto));
btnAbrirCadastroCliente.addEventListener('click', () => showModal(modalCadastroCliente));
btnAbrirCadastroFornecedor.addEventListener('click', () => showModal(modalCadastroFornecedor));
btnAbrirCadastroBens.addEventListener('click', () => showModal(modalCadastroBens));
btnGerarRelatorios.addEventListener('click', () => showModal(modalRelatorios));

formCadastroProduto.addEventListener('submit', function(event) {
  event.preventDefault();
  const precoCompra = parseFloat(document.getElementById('precoCompra').value);
  const icms = parseFloat(document.getElementById('icms').value);
  const precoVenda = parseFloat(document.getElementById('precoVenda').value);

  if (isNaN(precoCompra) || isNaN(icms) || isNaN(precoVenda)) {
    alert('Por favor, preencha todos os campos com valores numéricos.');
    return;
  }

  const custo = calcularCusto(precoCompra, icms);
  const lucro = calcularLucro(precoVenda, custo);

  alert(`Custo do produto: R$ ${custo.toFixed(2)}\nLucro da venda: R$ ${lucro.toFixed(2)}`);
});

formVendaProduto.addEventListener('submit', function(event) {
  event.preventDefault();

  const vendaAVista = document.getElementById('vendaAVista').checked;
  const vendaAPrazo = document.getElementById('vendaAPrazo').checked;

  if (vendaAVista) {
    alert("Vendendo o produto à vista...");
  } else if (vendaAPrazo) {
    alert("Vendendo o produto a prazo...");
  } else {
    alert("Por favor, selecione ao menos uma opção de venda.");
  }

  closeModal(modalVendaProduto);
});

formCadastroBens.addEventListener('submit', function(event) {
  event.preventDefault();
  const nomeBem = document.getElementById('nomeBem').value;
  const valorBem = parseFloat(document.getElementById('valorBem').value);

  if (!nomeBem || isNaN(valorBem)) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Bem cadastrado com sucesso!\nNome do Bem: ${nomeBem}\nValor: R$ ${valorBem.toFixed(2)}`);
  closeModal(modalCadastroBens);
});

function showModal(modal) {
  modal.style.display = 'block';
}

function closeModal(modal) {
  modal.style.display = 'none';
}

function calcularCusto(precoCompra, icms) {
  return precoCompra + (precoCompra * (icms / 100));
}

function calcularLucro(precoVenda, custo) {
  return precoVenda - custo;
}

window.onclick = function(event) {
  if (event.target == modalCadastroProduto) {
    closeModal(modalCadastroProduto);
  } else if (event.target == modalVendaProduto) {
    closeModal(modalVendaProduto);
  } else if (event.target == modalCadastroCliente) {
    closeModal(modalCadastroCliente);
  } else if (event.target == modalCadastroFornecedor) {
    closeModal(modalCadastroFornecedor);
  } else if (event.target == modalCadastroBens) {
    closeModal(modalCadastroBens);
  } else if (event.target == modalRelatorios) {
    closeModal(modalRelatorios);
  }
};

document.getElementById('btnGerarBalancoPatrimonial').addEventListener('click', function() {
  alert('Gerando Balanço Patrimonial...');
  // Código para gerar balanço patrimonial
});

document.getElementById('btnGerarRelatorioClientes').addEventListener('click', function() {
  alert('Gerando Relatório de Clientes...');
  // Código para gerar relatório de clientes
});

document.getElementById('btnGerarRelatorioFornecedores').addEventListener('click', function() {
  alert('Gerando Relatório de Fornecedores...');
  // Código para gerar relatório de fornecedores
});
