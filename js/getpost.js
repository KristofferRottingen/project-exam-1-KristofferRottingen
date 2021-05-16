const proxy = "https://noroffcors.herokuapp.com/";

const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts";

const cors = proxy + url;

const allPosts = document.querySelector(".all_posts");

async function getAllPosts(){
    try {
        const response = await fetch(cors);

        const result = await response.json();

        console.log(result);

        allPosts.innerHTML = "";

        for(let i = 0; i < result.length; i++)  {
            console.log(result[i].id);
   
            if (i === 8) {
                break;
            };
            
            allPosts.innerHTML += 
            `<div class="blog_grid">
                <a href="post.html?id=${result[i].id}" class="grid_post_card">
                    <img src="${result[i].acf.main_image}" alt="burger">
                    <h3>${result[i].acf.title}</h3>
                    <p>${result[i].acf.post_dato}</p>
                </a>
            </div>`;
        }
        
    } catch(error) {
        console.log(error);
    }
}

getAllPosts();


