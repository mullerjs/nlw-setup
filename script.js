const form = document.querySelector("#form-habits") // recebendo o elemento form
const nlwSetup = new NLWSetup(form) // instaciando a bliblioteca
const button = document.querySelector("header button") // Criando uma variavel e adicionar um botao

button.addEventListener("click", add) // Busca o clique no botao
form.addEventListener("change", save)

function add() {
  // Pega o dia atual em formato DD/MM, verifica se ele existe, caso nao ele adiciona ao form
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // Colocar a data  para a variavel today
  const dayExists = nlwSetup.dayExists(today) // Vai pega o nlwSetup  e vai verificar se o today existe se existir vai retornar o valor de TRUE se nao existir é FALSE e nao entra no codiogo abaixo

  if (dayExists) {
    alert("dia ja incluso ⛔")
    return
  }
  alert('dia adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
nlwSetup.setData(data)
nlwSetup.load()
