const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');
//modalAuth.classList.add('hello')
//console.log(modalAuth.classList.contains('hello'))
//modalAuth.classList.remove('modal-auth')

//console.log(modalAuth)

function toggleModalAuth() {
    loginInput.style.borderColor = '';
    modalAuth.classList.toggle('is-open'); 
}

function authorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }
    console.log('Authorized');

    userName.textContent = login;

    //buttonAuth.style.backgroundColor = 'red';
    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut)
}

function notAuthorized() {
  console.log('not Authorized');

  function logIn(event) {
    event.preventDefault();
    
    if (loginInput.value.trim()) {
  
    login = loginInput.value;
    localStorage.setItem('gloDelivery', login);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  } else {
    loginInput.style.borderColor = 'red';
  }
}
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
    if(login) {
      authorized();
    } else {
      notAuthorized();
    }
}
checkAuth();