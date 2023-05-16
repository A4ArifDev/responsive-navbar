    
// toggle bar creating
const menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener('click',()=>{
  menuToggle.classList.toggle('active-toggle');
})


// active class on menu
const bar = document.querySelector(".toggle");
const menu = document.querySelector(".links");

bar.addEventListener('click', ()=>{
  menu.classList.toggle("active");
});

// menu close after clicking on link
const addanchors = document.querySelectorAll('.links li a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', ()=>{
      anchor.classList.add('active')
    })
});

// menu close after clicking on link
const anchors = document.querySelectorAll('.links li a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', ()=>{
      menu.classList.remove('active');
      menuToggle.classList.remove('active-toggle');
    })
});

