const linkIcon = document.querySelector('.links');
let close1 = document.querySelector('.links .icon span:first-child')
let close2 = document.querySelector('.links .icon span:nth-child(2)')
let close3 = document.querySelector('.links .icon span:last-child')
const pages = document.querySelector('.pages')

linkIcon.addEventListener('click', () => {
  if (pages.style.display === "none") {
    pages.style.display = "block" 
    close1.classList.add('close-1')
    close2.classList.add('close-2')
    close3.classList.add('close-3')
  } else {
    pages.style.display = "none"
    close1.classList.remove('close-1')
    close2.classList.remove('close-2')
    close3.classList.remove('close-3')
   
  }
})

let bar = document.querySelector('.scroll-bar');

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;

  bar.style.width = `${(scrollTop / height) * 100}%`;
  console.log(scrollTop)

  
})


