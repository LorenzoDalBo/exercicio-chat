function mandaMsg(texto) {
    const novaDiv = document.createElement("div")
    const novoH2 = document.createElement("h2")
    const novoP = document.createElement("p")
    novaDiv.classList.add("caixa")
    novaDiv.classList.add("usuario")
    novoH2.classList.add("pessoa")
    novoH2.innerText = "Você"
    novoP.classList.add("msg")
    novoP.innerText = texto
    novaDiv.appendChild(novoH2)
    novaDiv.appendChild(novoP)
    chat.appendChild(novaDiv)
    
}

const botaoEnvio = document.querySelector("#botao-envio");
const msg = document.querySelector("#campo-msg")
const chat = document.querySelector("#chat")

botaoEnvio.addEventListener("click", () => {
    const textoMsg = msg.value
    mandaMsg(textoMsg)
    msg.value = ""
})