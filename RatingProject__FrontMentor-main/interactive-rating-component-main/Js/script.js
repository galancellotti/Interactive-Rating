const Btn__Submit = document.querySelector(".submit__rating")
const Rating__Cards = document.querySelectorAll(".Rating span")
const Rate_point = document.getElementById("rate")
const Rating__section = document.querySelector(".Rating__Container")
const thank = document.querySelector(".ThankContainer")

let rate = null;

Rating__Cards.forEach(Rating__Card => {
    Rating__Card.addEventListener("click", (e)=> {
        const active = document.querySelector(".checked")
        const card = e.target;
        card.classList.add("checked");
        if(active){
            active.classList.remove("checked")
        }
        rate = e.target.innerText;
    })
})

Btn__Submit.addEventListener("click", () => {
    
        Rate_point.innerHTML = rate
        Rating__section.classList.add("hidden")
        thank.classList.remove("hidden")
})