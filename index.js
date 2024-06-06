const on=document.querySelector(".on");
const body=document.querySelector("body");
const header=document.querySelector("header");
let ul=document.querySelector(".ul");
let container=document.querySelector(".Container");
const maincontainer=document.querySelector(".main-container");
const nav=document.querySelector("nav");
const off=document.querySelector(".off");
let arr=[body,header,ul,container,maincontainer,nav];
 on.addEventListener("click",()=>{
       container.style.backgroundColor="black";
       maincontainer.style.backgroundColor="black";
       arr.forEach((e)=>{
           e.classList.add("utiliti2");
    }
    )
 })
 off.addEventListener("click",()=>{
    container.style.backgroundColor="rgb(231, 231, 247)";
    maincontainer.style.backgroundColor="rgb(231, 231, 247)";
    arr.forEach((e)=>{
        e.classList.remove("utiliti2");
 }
 )
})
let values=true;
 let options=document.querySelector(".options");
 options.disabled=true;
 let navright=document.querySelector(".display");
//  let ul=document.querySelector(".ul");
let check;
let check1;

let execute = () => {
    if (values === false) {
        options.disabled = true;
        navright.style.visibility = "hidden";
        values = true;
    }
};

let execute1 = () => {
    if (values === false) {
        options.disabled = true;
        ul.style.visibility = "hidden";
        navright.style.visibility = "hidden";
        values = true;
    }
};


check1 = () => {
    if (window.innerWidth <= 518) {
        body.addEventListener("click", execute1);
        ul.style.visibility="hidden";
        options.addEventListener("click", (e) => {
            e.stopPropagation();
            if (values === true) {
                options.disabled = false;
                ul.style.visibility = "visible";
                navright.style.visibility = "visible";
                values = false;
            } else {
                options.disabled = true;
                ul.style.visibility = "hidden";
                navright.style.visibility = "hidden";
                values = true;
            }
        });
      
    } 
    else if(window.innerWidth <= 772 && window.innerWidth >= 518){
        navright.style.visibility = "hidden";
    }
    
    
    else {
        body.removeEventListener("click", execute1);
        navright.style.visibility = "visible";
        ul.style.visibility = "visible";
    }
};

check = () => {
    if (window.innerWidth <= 772 && window.innerWidth >=518) {
        body.addEventListener("click", execute);
        navright.style.visibility = "hidden";
        options.addEventListener("click", (e) => {
            e.stopPropagation();
            if (values === true) {
                options.disabled = false;
                navright.style.visibility = "visible";
                values = false;
            } else {
                options.disabled = true;
                navright.style.visibility = "hidden";
                values = true;
            }
        });
        
    }
    else if(window.innerWidth<=518){
        navright.style.visibility = "hidden";
    }
    else {
        body.removeEventListener("click", execute);
        navright.style.visibility = "visible";
    }
};
check();
check1();

window.addEventListener("resize", check);
window.addEventListener("resize", check1);