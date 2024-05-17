let menu= document.querySelector('#menu-bars');
let header= document.querySelector('header');

menu.click= ()=>{
menu.classList.toggle('fa-times');
header.classList.toggle('active');
}
window.scroll= ()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    }
let cursor1=document.querySelector('.cursor-1');
let cursor2=document.querySelector('.cursor-2');

window.onmousemove=(e)=>{
    cursor1.style.top=e.pageY+'px';
    cursor1.style.left=e.pageX+'px';
    cursor1.style.top=e.pageY+'px';
    cursor1.style.left=e.pageX+'px';
}