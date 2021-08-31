const callBack = document.querySelector('.callback');
const shadow = document.querySelector('.shadow');
const modal = document.querySelector('.modal'); 
const closeModalBtn = document.querySelector('.modal__close');

shadow.addEventListener('click', closeModal);

closeModalBtn.addEventListener('click', closeModal);

function closeModal(){
    shadow.style.display = "none";
    modal.classList.remove('active');
}

callBack.addEventListener('click',function(){
    shadow.style.display = "block";
    modal.classList.add('active');
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape' && modal.classList.contains('active')) closeModal();
  });

var phoneMask = IMask(
    document.getElementById('tel'), {
      mask: '+{38} (000) 000-00-00',
      lazy: false,
});

