const heartButt = document.querySelector("#heartButt");

heartButt.addEventListener('click', function () {
console.log("he touched the Heartbutt")
  // 1) Open the Modal
  // 2) Save Information to Local Storage
  // 3) Navigate to the Second Page
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

