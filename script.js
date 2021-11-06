function calcularlitros() {
  var velocidade = parseFloat(txtVelocidade.value);
  var tempo = parseFloat(txtTempo.value);
  var rendimento = parseFloat(txtRendimento.value);

  if (isNaN(velocidade) || isNaN(tempo) || isNaN(rendimento)) {
    txtResultado.innerHTML = "Erro Valor inválido";
  } else {
    var distancia = (tempo / 60) * velocidade;
    var litrosconsumidos = distancia / rendimento;

    txtResultado.innerHTML =
      "Foram gastros " + litrosconsumidos.toFixed(2) + " litros";
  }
}
