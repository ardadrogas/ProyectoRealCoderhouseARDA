let toogle = document.querySelectorAll('.toogle');
let btn_2 = document.getElementById('btn-2');

toogle.forEach((element) => {
  element.addEventListener('click', () => {
    btn_2.classList.toggle('oculto');
  });
});
 console.log(toogle);