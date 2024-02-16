

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
nums.forEach((num) => startcount(num));
function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        } 
    }, 10);
}


// ***********************************Cookie*******************************


    let popup = document.getElementById("cookiepopup");
    document.getElementById("acceptcookie").addEventListener("click", () =>{
        let d = new Date();

        d.setMinutes(2 + d.getMinutes());

        document.cookie = "myCookieName=josh coin; expires = " + d +"; ";
        popup.classList.add("hide");
        popup.classList.remove("show")

    });
    const checkcookie = () =>{
        let input = document.cookie.split("=");

        if (input[0] == "myCookieName") {
            popup.classList.add("hide");
            popup.classList.remove("show");

        }else{
            popup.classList.add("show");
            popup.classList.remove("hide");
        }
    };
    window.onload = () =>{
        setTimeout(() =>{
checkcookie();
        },5000)
    }