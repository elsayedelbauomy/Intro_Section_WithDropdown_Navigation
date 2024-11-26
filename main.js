const menue = document.getElementById("menue");
const nav = document.getElementById("nav");
let bars = document.querySelectorAll(".mainBar .li")
const overLay = document.querySelector(".overLay")
menue.addEventListener("click" , function () {
    if(!nav.classList.contains("active"))  {
        nav.style.right = "0px"
        nav.classList.add("active");
        menue.src = "./images/icon-close-menu.svg"
        overLay.style.display = "block"
    }else {
        nav.classList.remove("active")
         nav.style.right = "-100%"
         menue.src = "./images/icon-menu.svg"
         overLay.style.display = "none"
    }
})

bars.forEach((bar) => {
    bar.addEventListener("click", function (e) {
        if(e.target.tagName == "LI"&& e.target.classList.contains("li") ){
            if(!e.target.classList.contains("active")) {
                e.target.classList.add("active");
                e.target.children[0].src = "./images/icon-arrow-up.svg"
                e.target.children[1].style.display = "flex";

            }else {
                e.target.classList.remove("active");
                e.target.children[0].src = "./images/icon-arrow-down.svg"
                e.target.children[1].style.display = "none"
            }
        }
    })
})
