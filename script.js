function openquest(idAtividade) {
    const conteudos = document.querySelectorAll('.quest');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });

    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    const secaoAlvo = document.getElementById(idAtividade);
    if (secaoAlvo) {
        secaoAlvo.classList.add('active');
    }
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}
function verificarTriangulo() {
    const inputX = document.getElementById("ladoX");
    const inputY = document.getElementById("ladoY");
    const inputZ = document.getElementById("ladoZ");
    const campoResultado = document.getElementById("resultadoTriangulo");

    if (!inputX.value.trim() || !inputY.value.trim() || !inputZ.value.trim()) {
        campoResultado.innerText = "Preencha os campos";
        return;
    }

    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);
    const z = parseFloat(inputZ.value);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        campoResultado.innerText = "Somente números válidos";
        return;
    }

    if ((x < y + z) && (y < x + z) && (z < x + y)) {
        if (x === y && y === z) {
            campoResultado.innerText = "Triângulo Equilátero";
        } else if (x === y || x === z || z === y) {
            campoResultado.innerText = "Triângulo Isósceles";
        } else {
            campoResultado.innerText = "Triângulo Escaleno";
        }
    } else {
        campoResultado.innerText = "Os valores informados não formam um triângulo";
    }
}
function calcularIMC() {
    const inputPeso = document.getElementById("entraPeso");
    const inputAltura = document.getElementById("entraAltura");
    const campoResultado = document.getElementById("resultadoIMC");

    if (!inputPeso.value.trim() || !inputAltura.value.trim()) {
        campoResultado.innerText = "Preencha os campos";
        return;
    }

    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        campoResultado.innerText = "Somente números válidos";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    campoResultado.innerText = `O seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
}
function calcularImposto() {
    const inputAno = document.getElementById("anoCarro");
    const inputValor = document.getElementById("valorCarro");
    const campoResultado = document.getElementById("resultadoImposto");

    if (!inputAno.value.trim() || !inputValor.value.trim()) {
        campoResultado.innerText = "Preencha os campos";
        return;
    }

    const ano = parseInt(inputAno.value);
    const valor = parseFloat(inputValor.value);

    if (isNaN(ano) || isNaN(valor) || valor <= 0) {
        campoResultado.innerText = "Dados inválidos";
        return;
    }

    let taxa = ano < 1990 ? 0.01 : 0.015;
    const imposto = valor * taxa;

    campoResultado.innerText = `Imposto a pagar: R$ ${imposto.toFixed(2)} (Taxa de ${(taxa * 100).toFixed(1)}%)`;
}
function calcularAumentoSalario() {
    const inputSalario = document.getElementById("salarioAtual");
    const inputCodigo = document.getElementById("codigoCargo");
    const campoResultado = document.getElementById("resultadoSalario");

    if (!inputSalario.value.trim() || !inputCodigo.value.trim()) {
        campoResultado.innerText = "Preencha os campos";
        return;
    }

    const salarioAntigo = parseFloat(inputSalario.value);
    const codigo = parseInt(inputCodigo.value);

    if (isNaN(salarioAntigo) || salarioAntigo <= 0) {
        campoResultado.innerText = "Salário inválido";
        return;
    }

    let percentual = 0.40;

    if (codigo === 101) percentual = 0.10;
    else if (codigo === 102) percentual = 0.20;
    else if (codigo === 103) percentual = 0.30;

    const diferenca = salarioAntigo * percentual;
    const novoSalario = salarioAntigo + diferenca;

    campoResultado.innerHTML = `Salário Antigo: R$ ${salarioAntigo.toFixed(2)}<br>
                                Novo Salário: R$ ${novoSalario.toFixed(2)}<br>
                                Diferença: R$ ${diferenca.toFixed(2)}`;
}
function calcularCredito() {
    const inputSaldo = document.getElementById("saldoMedio");
    const campoResultado = document.getElementById("resultadoCredito");

    if (!inputSaldo.value.trim()) {
        campoResultado.innerText = "Preencha o campo de saldo médio";
        return;
    }

    const saldo = parseFloat(inputSaldo.value);
    if (isNaN(saldo)) {
        campoResultado.innerText = "Número inválido";
        return;
    }

    let percentual = 0;

    if (saldo >= 0 && saldo <= 200) percentual = 0;
    else if (saldo <= 400) percentual = 0.20;
    else if (saldo <= 600) percentual = 0.30;
    else if (saldo > 600) percentual = 0.40;

    const valorCredito = saldo * percentual;

    campoResultado.innerText = `Saldo Médio: R$ ${saldo.toFixed(2)} | Valor do Crédito Concedido: R$ ${valorCredito.toFixed(2)}`;
}
function calcularLanchonete() {
    const inputCod = document.getElementById("codLanche").value.trim().toLowerCase();
    const inputQtd = document.getElementById("qtdLanche");
    const campoResultado = document.getElementById("resultadoLanche");

    if (!inputCod || !inputQtd.value.trim()) {
        campoResultado.innerText = "Preencha o nome do produto e a quantidade";
        return;
    }

    const qtd = parseInt(inputQtd.value);
    if (isNaN(qtd) || qtd <= 0) {
        campoResultado.innerText = "Quantidade inválida";
        return;
    }

    let precoUnitario = 0;

    switch (inputCod) {
        case "cachorro quente": precoUnitario = 11.00; break;
        case "bauru": precoUnitario = 8.50; break;
        case "misto quente": precoUnitario = 8.00; break;
        case "hamburger": precoUnitario = 9.00; break;
        case "cheeseburger": precoUnitario = 10.00; break;
        case "refrigerante": precoUnitario = 4.50; break;
        default:
            campoResultado.innerText = "Produto não encontrado no cardápio";
            return;
    }

    const total = precoUnitario * qtd;
    campoResultado.innerText = `Valor a ser pago por este item: R$ ${total.toFixed(2)}`;
}
function calcularVenda() {
    const inputPreco = document.getElementById("precoEtiqueta");
    const inputCondicao = document.getElementById("condicaoPagamento").value.trim().toLowerCase();
    const campoResultado = document.getElementById("resultadoVenda");

    if (!inputPreco.value.trim() || !inputCondicao) {
        campoResultado.innerText = "Preencha todos os campos";
        return;
    }

    const preco = parseFloat(inputPreco.value);
    if (isNaN(preco) || preco <= 0) {
        campoResultado.innerText = "Preço inválido";
        return;
    }

    let valorFinal = 0;

    if (inputCondicao === 'a') {
        valorFinal = preco * 0.90;
    } else if (inputCondicao === 'b') {
        valorFinal = preco * 0.85;
    } else if (inputCondicao === 'c') {
        valorFinal = preco;
    } else if (inputCondicao === 'd') {
        valorFinal = preco * 1.10;
    } else {
        campoResultado.innerText = "Condição de pagamento inválida! Use a, b, c ou d.";
        return;
    }

    campoResultado.innerText = `Valor total a pagar: R$ ${valorFinal.toFixed(2)}`;
}
function calcularPagamentoProfessor() {
    const inputNivel = document.getElementById("nivelProf");
    const inputHoras = document.getElementById("horasAula");
    const campoResultado = document.getElementById("resultadoProf");

    if (!inputNivel.value.trim() || !inputHoras.value.trim()) {
        campoResultado.innerText = "Preencha os campos";
        return;
    }

    const nivel = parseInt(inputNivel.value);
    const horas = parseFloat(inputHoras.value);

    if (isNaN(nivel) || isNaN(horas) || horas < 0) {
        campoResultado.innerText = "Valores numéricos inválidos";
        return;
    }

    let valorHoraAula = 0;

    if (nivel === 1) valorHoraAula = 12.00;
    else if (nivel === 2) valorHoraAula = 17.00;
    else if (nivel === 3) valorHoraAula = 25.00;
    else {
        campoResultado.innerText = "Nível de professor inválido (Selecione 1, 2 ou 3)";
        return;
    }

    const salario = valorHoraAula * horas * 4.5;
    campoResultado.innerText = `O salário semanal/mensal ajustado do professor é: R$ ${salario.toFixed(2)}`;
}
function limparCampos(idAtividade) {
    const secao = document.getElementById(idAtividade);
    if (secao) {

        const inputs = secao.querySelectorAll("input");
        inputs.forEach(input => {
            input.value = "";
        });

        const paragrafoResultado = secao.querySelector("p[id^='resultado']");
        if (paragrafoResultado) {
            paragrafoResultado.innerText = "Resultado";
        }
    }
}