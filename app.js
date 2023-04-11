const container = document.querySelector('container')
const formSubmit = document.getElementById('form')
const input = document.getElementById('search-bar')
const output = document.querySelector('.output')
const word = document.querySelector('.word')
const definition = document.querySelector('.definition')
const author = document.querySelector('.author')



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b0729b720msha963c1aab6fcf66p13d7eejsnb50294ef6d4f',
		'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
	}
};

function loadWord (e){
  e.preventDefault()
  fetch(`https://urban-dictionary7.p.rapidapi.com/v0/define?term=${input.value}`, options)
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    renderUI(data)
  })
}
function renderUI(data){
  console.log(data.list)
  word.innerText = input.value
  definition.innerHTML = data.list[1].definition
  author.innerHTML = `by ${data.list[1].author}`

  
}



formSubmit.addEventListener('submit', loadWord)