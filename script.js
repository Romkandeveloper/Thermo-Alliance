const callBack = document.querySelector('.callback');
const shadoow = document.querySelector('.shadow');
const modal = document.querySelector('.modal'); 

callBack.addEventListener('click',function(){
    shadoow.style.display = "block";
    modal.classList.add('active');
});

shadoow.addEventListener('click',function(){
    this.style.display = "none";
    modal.classList.remove('active');
});

var phoneMask = IMask(
    document.getElementById('tel'), {
      mask: '+{38} (000) 000-00-00'
});