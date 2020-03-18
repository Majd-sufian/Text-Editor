  /**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * document: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


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
