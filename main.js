async function listaPersonagens() {
  const template = document.querySelector('#modelo-personagem')
  const request = await fetch('personagens.json')
  const data = await request.json()

  data.forEach(personagem => {
    const clone = template.content.cloneNode(true)
    const nome = clone.querySelector('h2')
    const hostilidade = clone.querySelector('p')
    nome.textContent = personagem.nome
    hostilidade.textContent = personagem.hostilidade
    template.parentNode.appendChild(clone)
  })
}

listaPersonagens()