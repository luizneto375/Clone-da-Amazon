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


