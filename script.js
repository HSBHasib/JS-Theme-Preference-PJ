let body = document.body;
let btn = document.querySelector("button");
const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function themelightToDark () {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        body.classList.add("light");  
        body.classList.remove("dark");
    }   
}


if(localStorage.getItem("theme")) {
    body.classList.add(localStorage.getItem("theme"));
} else {
    themelightToDark();
}

themeQuery.addEventListener("change", function() {
    if(!localStorage.getItem("theme")) {
        themelightToDark(); 
    } 
});


btn.addEventListener("click", function() {
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");  

        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");

        localStorage.setItem("theme", "dark");
    }
});
