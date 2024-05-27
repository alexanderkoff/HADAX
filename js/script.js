//меню-бургер
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.custom-nav').classList.toggle('open');
})

//вопрос-ответ
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () =>{
    faq.classList.toggle("active");
  })
})

//маска для формы
$(document).ready(function(){
  console.log('Document ready');
  
  // Маска для всех телефонных номеров на странице
  $('input[name="phone"]').each(function() {
    $(this).mask('+7 (000) 000-00-00');
  });
});

function toggleSubmit(submitButtonId, checkboxId) {
  console.log('toggleSubmit called for:', submitButtonId, checkboxId);
  var submitButton = document.getElementById(submitButtonId);
  var checkbox = document.getElementById(checkboxId);
  if (submitButton && checkbox) {
    submitButton.disabled = !checkbox.checked;
    console.log('Submit button status:', submitButton.disabled);
  } else {
    console.error('Submit button or checkbox not found for:', submitButtonId, checkboxId);
  }
}

