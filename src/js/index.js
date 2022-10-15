// 1º passo: dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
  // 2º passo: dar um jeito de identificar o clique no elemento da aba
  aba.addEventListener("click", function() {

    if(aba.classList.contains("selecionado")){
      return;
    }

    selecionarAba(aba)
    mostrarInfoAba(aba)
  })
})

function selecionarAba(aba) {
  // 3º passo: quando o usuário clicar, desmarcar a aba selecionada
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  // 4º passo: marcar a aba clicada como selecionado
  aba.classList.add("selecionado");
}

function mostrarInfoAba(aba){
  // 5º passo: esconder o conteúdo anterior
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  // 6º passo: mostrar conteúdo da aba selecionada
  const idInfoAba = `informacao-${aba.id}`
  const infoMostrada = document.getElementById(idInfoAba);
  infoMostrada.classList.add("selecionado")
}
