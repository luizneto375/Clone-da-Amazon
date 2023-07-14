const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");


rightbtn.addEventListener('click', function(event){
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn.addEventListener('click', function(event){
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})

const lef1tbtn = document.querySelector(".btn-1b");
const righ1tbtn = document.querySelector(".btn-1a");


righ1tbtn.addEventListener('click', function(event){
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft += 1100;
    event.preventDefault();
});

lef1tbtn.addEventListener('click', function(event){
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})


const backtop = document.querySelector(".backtop");

backtop.addEventListener("clkick", ()=>{
    document.scrollTop({
        top: 0,
        behavior: "smooth"
    });
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.add("stop-scroll");
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");


sign.addEventListener("click", ()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    
})