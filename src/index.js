import { Klicky } from "./klicky";

Klicky('data-tracking');

const news_button = document.querySelector("#more_button");
const news = document.querySelector("#moreNewsSection");

news_button.addEventListener("click", () => {
    if(news.style.display === "none") {
        news.style.display = "block";
        news_button.innerHTML = "Show less 🡡";
    } else {
        news.style.display = "none";
        news_button.innerHTML = "Show more 🡣";
    }
});
