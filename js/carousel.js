/* Get data from api-----> */
const sectionOne = document.querySelector(".sec1");
const sectionTwo = document.querySelector(".sec2");
const sectionThree = document.querySelector(".sec3");
const sectionFour = document.querySelector(".sec4");

const url = "http://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts";

async function getApi(){
    try {
        const res = await fetch(url);

        const data = await res.json();

        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getApi();

function getPosts(result) {
    for(let i = 0; i < result.length; i++)  {

        if (i = 4) {
            break;
        }
    }

    sectionOne.innerHTML = `<a href="post.html?id=${result[0].id}" class="post_card">
                                <img src="${result[0].content.redered.img}" alt="burger">
                                <h3>The American burger</h3>
                                <p>10/04/2021</p>
                            </a>`
}


/* Carousel glider-----> */
const slider = document.querySelector(".latest_posts");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const markParent = document.querySelector(".nav_arrows ul");

var index = 0;

function setIndex(){
    document.querySelector(".nav_arrows .chosen").classList.remove("chosen");
    slider.style.transform = "translate(" + (index) * -25 +  "%)";
}

/* navigation dots ----> */
document.querySelectorAll(".nav_arrows li").forEach(function( mark, ind) {
    mark.addEventListener("click", function() {
        index = ind;
        setIndex();
        mark.classList.add("chosen")
    });
});

/* left and rigth aroww -----> */
leftArrow.addEventListener("click", function() {
    index = (index > 0) ? index - 1 : 0;
    setIndex();
    markParent.children[index].classList.add("chosen");
});

rightArrow.addEventListener("click", function() {
    index = (index < 3) ? index + 1 : 3;
    setIndex();
    markParent.children[index].classList.add("chosen");
});