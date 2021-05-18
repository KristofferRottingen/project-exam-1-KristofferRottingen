const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts/" + id;