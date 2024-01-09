/*==================== WHATS BUTTON SCROLL ====================*/
function whatsHidden() {
  let btnWhats = document.querySelector('.whats__p')

  if (window.scrollY > 50) {
    console.log('funcionou')
    btnWhats.style.display = 'none'
  } else {
    console.log('funiconou else')
    btnWhats.style.display = 'block'
  }
}

window.addEventListener('scroll', whatsHidden)

/*==================== HOME BUTTON CLICK ====================*/

/*==================== FEEDBACK SWIPER ====================*/
let swiper = new Swiper(".feedback__container", {
  cssMode: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==================== Questions ====================
const questionsContent = document.getElementsByClassName('questions__content'),
  questions = document.querySelectorAll('.questions__header')

function toggleQuestions() {
  let itemClass = this.parentNode.className

  for (i = 0; i < questionsContent.length; i++) {
    questionsContent[i].className = 'questions__content questions__close'
  }
  if (itemClass === 'questions__content questions__close') {
    this.parentNode.className = 'questions__content questions__open'
  }
}

questions.forEach((el) => {
  el.addEventListener('click', toggleQuestions)
})
