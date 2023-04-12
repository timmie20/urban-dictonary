const container = document.querySelector('container')
const formSubmit = document.getElementById('form')
const input = document.getElementById('search-bar')
const result = document.querySelector('.result')
const loading = document.querySelector('.loading')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b0729b720msha963c1aab6fcf66p13d7eejsnb50294ef6d4f',
		'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
	}
};

let isLoading = false

function loadWord (e){
  result.innerHTML = ''
  isLoading = true
  checkLoading()
  fetch(`https://urban-dictionary7.p.rapidapi.com/v0/define?term=${input.value}`, options)
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    renderUI(data)
    isLoading = false
    checkLoading()
  })
  e.preventDefault()
}

function checkLoading (){
  if (isLoading) {
    loading.style.display = "block"
  } else {
    loading.style.display = "none"
  }
}

function renderUI(data){
  
  console.log(data.list)
  data.list.forEach((item, index) => {
    if (index < 5) {
      const output = document.createElement('div')
    output.classList.add('output')
    const word = document.createElement('h1')
    word.classList.add('word')
    word.innerHTML = input.value
    const definition = document.createElement('p')
    definition.classList.add('definition')
    definition.innerHTML = item.definition
    const author = document.createElement('p')
    author.classList.add('author')
    author.innerHTML = `by ${item.author}`
    const div = document.createElement('div')
    div.classList.add('div')
    const example = document.createElement('p')
    example.innerHTML = `use case : ${item.example}`
    output.appendChild(word)
    output.appendChild(definition)
    output.appendChild(author)
    div.appendChild(example)
    output.appendChild(div)
    result.appendChild(output)
    }
  })
  input.value = ''

}

checkLoading()

formSubmit.addEventListener('submit', loadWord)