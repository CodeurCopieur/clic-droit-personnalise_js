const menuPerso = document.querySelector('.menu__perso');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

document.addEventListener('contextmenu', (e)=> {
  console.log(e);
  e.preventDefault();

  menuPerso.style.display = 'block';
  menuPerso.style.top = `${e.clientY}px`;
  menuPerso.style.left = `${e.clientX}px`;
})

document.addEventListener('click', ()=> {
  menuPerso.style.display = 'none';
})

b1.addEventListener('click', ()=> {
  document.body.style.background = "blue";
})

b2.addEventListener('click', ()=> {
  document.body.style.background = "red";
})