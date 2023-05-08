const mainInput = document.querySelector('.main-input')
const addBtn = document.querySelector('.add-btn')
const ulList = document.querySelector('.ul-list')
const ulError = document.querySelector('.ul-is-empty')

const editBox = document.querySelector('.edit-note')
const editInput = document.querySelector('.edit-note-input')
const accBtn = document.querySelector('.accept')
const cancelBtn = document.querySelector('.cancel')
const editError = document.querySelector('.error')

const doneBtn = document.querySelector('.fa-check')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.fa-xmark')


const checkInput = (params) => {
    if(mainInput.value === '' ){
        console.log('gunwomp');
        ulError.innerHTML = 'Wpisz treść zadania!'
    }else{
        ulError.innerHTML = 'Brak zadań na liście.'
        addQuest()
       
       
       
    }
    
}






// Zdefiniuj zmienną ulError na podstawie identyfikatora elementu


// Zdefiniuj funkcję checkUl, która sprawdza, czy lista jest pusta
const checkUl = () => {
  const allLi = document.getElementsByTagName('li');
  if (allLi.length === 0) {
    // Pokaż komunikat o błędzie, jeśli lista jest pusta
    ulError.style.visibility = 'inherit';
  } else {
    // Ukryj komunikat o błędzie i wyświetl liczbę elementów na liście
    ulError.style.visibility = 'hidden';
    console.log(allLi.length);
  }
};

// Wywołaj funkcję checkUl, aby sprawdzić stan listy przy ładowaniu strony
checkUl();




const addQuest = () => {
	let questTxt = mainInput.value
	let newLi = document.createElement('li')
    newLi.innerHTML = `<span class="liText">${questTxt}</span>
  <div class="tools"><i class="fa-solid fa-check"></i>
    <p class="edit">EDIT</p> <i class="fa-solid fa-xmark"></i>
  </div>
`
   ulList.append(newLi)
   mainInput.value = ''


//Przycisk zamykający
const closeBtn = newLi.querySelector('.fa-xmark')
const deleteLi = () => {
    newLi.remove() 
    checkUl();
}
closeBtn.addEventListener('click', deleteLi)


//Przycisk Edytujący
const editBtn = newLi.querySelector('.edit')
const checkEditinput = () => {
    if(editInput.value === ''){
        editError.style.visibility = 'inherit'
    }else{
        editQuest()
        editError.style.visibility = 'hidden'
    }
}

const editQuest = () => {
    spanText.textContent = editInput.value
    closeEdit() 
}


//Przycisk potwierdzający
const checkMarkBtn = newLi.querySelector('.fa-check')
    const spanText = newLi.querySelector('.liText')
    
    
    
	const checkElement = () => {
        if(spanText.style.color === 'grey'){
            spanText.style.color = 'black'
            spanText.style.textDecoration = 'none'
            
        }else{
            spanText.style.color = 'grey'
            spanText.style.textDecoration = 'line-through'
            
        }
        
	}

    
    if(ulList.contains(newLi)){ 
        ulError.style.visibility = 'hidden'
    }else{
        ulError.style.visibility = 'inherit'
    }

    const closeEdit = () => {
        editBox.style.visibility = 'hidden'
    
        
    }
    const showEdit = () => {
        editInput.value = spanText.textContent
        editBox.style.visibility = 'inherit'
        
    }
    
    editBtn.addEventListener('click', showEdit)
    cancelBtn.addEventListener('click', closeEdit)
    accBtn.addEventListener('click', checkEditinput)
	checkMarkBtn.addEventListener('click', checkElement)
}

mainInput.addEventListener('keyup', () => {
    if(event.keyCode === 13){
        addQuest()
        
    }
})
addBtn.addEventListener('click', checkInput)

