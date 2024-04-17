const heartButt = document.querySelector("#heartButt");
const physical = document.querySelector("#physical")
const age = document.querySelector("#age")
const interest = document.querySelector("#interest")
const kids = document.querySelector("#kids")
const submit = document.querySelector(".is-success")


submit.addEventListener('click', function (event) {
event.preventDefault()
  localStore()
  
  // 2) Save Information to Local Storage
  
  window.location.href = "./secondpage.html";
});

function openModal($el) {
  $el.classList.add('is-active');
}

(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
  const modal = $trigger.dataset.target;
  const $target = document.getElementById(modal);

  $trigger.addEventListener('click', () => {
    openModal($target);
  });
});

function localStore(){

const formInput = {
  physical: physical.value,
  age: age.value,
  interest: interest.value,
  kids: kids.value,
}
localStorage.setItem('formInput', JSON.stringify(formInput));
}
