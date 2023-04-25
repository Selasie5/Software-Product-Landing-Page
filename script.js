const btnOpen=document.querySelector('.open');
const btnClose=document.querySelector('.close');
const nav=document.getElementById('menu');

btnOpen.addEventListener('click', ()=>
{
    btnClose.style.display="block";
    btnOpen.classList.add('invisible');
    nav.classList.add('present');
})
btnClose.addEventListener('click', ()=>
{
    btnClose.style.display="none";
    btnOpen.classList.remove('invisible');
    nav.classList.remove('present');
})