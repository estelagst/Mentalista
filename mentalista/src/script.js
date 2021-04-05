alert("Descubra o número secreto")
var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3


while (tentativas > 0) {

  var chute = parseInt(prompt("Digite um número que esteja entre 0 e 10"))
  if (numeroSecreto == chute){
   alert("Parabéns, você acertou")
   break 
  } else if (chute > numeroSecreto){
  alert("O número secreto é menor")
  tentativas = tentativas -1 
  } else if (chute < numeroSecreto){
  alert("O número secreto é maior")
  tentativas = tentativas - 1 
    }
  }

if (chute != numeroSecreto) {
  alert("Que pena, suas tentativas acabaram. O número secreto era " + numeroSecreto)
}