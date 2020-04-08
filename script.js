updateText = () => {
  let textInput = document.getElementById("text-input").value
  document.getElementById("text-output").innerHTML = textInput;
}


makeBold = (elem) => {
  elem.classList.toggle('active-d')
  document.getElementById('text-output').classList.toggle('font-weight-bold')
}


makeItalic = (elem) => {
  elem.classList.toggle('active-d')
  document.getElementById('text-output').classList.toggle('font-italic')
}


makeUnderline = (elem) => {
  elem.classList.toggle('active-d')
  let addClass = document.getElementById('text-output')
  if (addClass.classList.contains('underline')){
    addClass.classList.remove('underline')
  } else {
    addClass.classList.add('underline')
  }
}


alignText = (elem, alignType) => {
  document.getElementById('text-output').style.textAlign = alignType
  // adding a new variable for buttons
  // adding a for loop in order to emplempt the logic
  let buttonsList = document.getElementsByClassName('align')
  for(let button of buttonsList){
    button.classList.remove('active-d')
  }
  elem.classList.add('active-d')
}


fontText = (elem, textTransform) => {
  document.getElementById('text-output').style.textTransform = textTransform
  let fontText =  document.getElementsByClassName('font')
  for(let font of fontText){
    font.classList.remove('active-d')
  }
  elem.classList.add('active-d')
}

const results = document.querySelector("#text-input")

let userPromise = fetch('http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')
userPromise.then((response) => response.json())
.then((data) => {
  data.Search.forEach((result) => {
    const title =  result.Title
    results.insertAdjacentHTML("beforeend", title);
  })
})

