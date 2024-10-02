let salario = 0;
let totalGasto = 0;

document.getElementById('adicionar-salario').addEventListener('click', function() {
    const valorSalario = parseFloat(document.getElementById('salario').value);

    if (isNaN(valorSalario) || valorSalario <= 0) {
        alert("Por favor, insira um valor de salário válido.");
        return;
    }

    salario = valorSalario;
    atualizarSaldoRestante();
    document.getElementById('saldo').innerText = salario.toFixed(2);
    document.getElementById('salario').value = '';
});

document.getElementById('adicionar-despesa').addEventListener('click', function() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao === "" || isNaN(valor) || valor <= 0) {
        alert("Por favor, preencha a descrição e o valor da despesa corretamente.");
        return;
    }

    totalGasto += valor;
    atualizarSaldoRestante();

    // Atualiza o histórico de despesas
    const lista = document.getElementById('lista-despesas');
    const item = document.createElement('li');
    item.innerText = `${descricao}: -R$ ${valor.toFixed(2)}`;
    lista.appendChild(item);

    // Atualiza o total gasto
    document.getElementById('total-gasto').innerText = totalGasto.toFixed(2);

    // Limpa os campos de entrada
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
});

function atualizarSaldoRestante() {
    const saldoRestante = salario - totalGasto;
    document.getElementById('saldo-restante').innerText = saldoRestante.toFixed(2);
    document.getElementById('saldo').innerText = saldoRestante.toFixed(2);
}
