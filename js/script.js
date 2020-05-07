function next(initial = false) {

  if(!initial){
    if (member_id < (members.length - 1)) {
      member_id += 1
    }
  }


  
  container.innerHTML = changeCard(members[member_id])


}

function prev() {


    if(member_id > 0) {
      member_id -= 1
    }

    container.innerHTML = container.innerHTML = changeCard(members[member_id])

}

function changeCard(member) {
  return `
        <div class="esquerda">
          <div class="personal">
            <span class="name">${member.name}</span>
            <span class="age">${member.age} anos</span>
            <span class="stack">${member.stack}</span>
            <span class="location">${member.location}</span>
          </div>

          <div>
            <div class="simbol ${member.stack}"></div>
          </div>
          <div class="bio">
            ${member.bio}
          </div>
          <div class="linkedin">Fale comigo no <a href="${member.linkedin}">LinkedIn</a></div>
        </div>

        <div class="photo">
          <img src="./img/${member.img}.jpg" alt="Foto da persona">
        </div>

        <div class="direita">

          <div class="block">
            <span class="title">
              _um sonho grande
            </span>
            <span class="text">
              ${member.dream}
            </span>
          </div>

          <div class="block">
            <span class="title">
              _quero aprender
            </span>
            <span class="text">
            ${member.learn}
            </span>
          </div>

          <div class="block">
            <span class="title">
              _posso ensinar
            </span>
            <span class="text">
            ${member.teach}
            </span>
          </div>

          <div class="block">
            <span class="title">
              _daqui a um ano estarei...
            </span>
            <span class="text">
            ${member.year_later}
            </span>
          </div>

        </div>

  
  `
}
const container = document.getElementById("card")
let member_id = 0
const members = [
  {
    "name": "Fabio",
    "age": 36,
    "stack": "_hacker",
    "location": "Curitiba - PR",
    "bio": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "linkedin": "https://www.linkedin.com",
    "dream": "Ter minha própria fábrica de softwares e impactar o maior número de pessoas possível.",
    "learn": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "teach": "Como adversidades podem te impulsionar na vida, dando visões diferentes, backend e indicar bandas de heavy metal.",
    "year_later": "muito mais confiante e adaptado ao dinamismo do mercado de trabalho.",
    "img": "FabioMuller"
  },
  {
    "name": "Fabio 2",
    "age": 36,
    "stack": "_hacker",
    "location": "Curitiba - PR",
    "bio": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "linkedin": "https://www.linkedin.com",
    "dream": "Ter minha própria fábrica de softwares e impactar o maior número de pessoas possível.",
    "learn": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "teach": "Como adversidades podem te impulsionar na vida, dando visões diferentes, backend e indicar bandas de heavy metal.",
    "year_later": "muito mais confiante e adaptado ao dinamismo do mercado de trabalho.",
    "img": "FabioMuller"
  },
  {
    "name": "Fabio 3",
    "age": 36,
    "stack": "_hacker",
    "location": "Curitiba - PR",
    "bio": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "linkedin": "https://www.linkedin.com",
    "dream": "Ter minha própria fábrica de softwares e impactar o maior número de pessoas possível.",
    "learn": "Inteligência emocional, trabalho em grupo, colaboração, alta performance e ferramentas atreladas às atividades técnicas e gerenciais.",
    "teach": "Como adversidades podem te impulsionar na vida, dando visões diferentes, backend e indicar bandas de heavy metal.",
    "year_later": "muito mais confiante e adaptado ao dinamismo do mercado de trabalho.",
    "img": "FabioMuller"
  }
]

next(true);