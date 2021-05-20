const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts/" + id;

const toggleImg = () => {
    document.querySelector(".modal")
    .classList.toggle("modal_hidden")

    document.querySelector(".bg")
    .classList.toggle("bg_hidden");
};

document.querySelector("#main_img")
.addEventListener("click", toggleImg);






async function getImg() {
    
    try{
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);
    } catch (error){
        console.log(error);
    }
};

getImg();