import { ButtonClick, Klicky } from "./klicky";

ButtonClick();
Klicky("data-tracking");

const news_button = document.querySelector("#news_button");
const news = document.querySelector("#moreNewsSection");

news_button.addEventListener("click", () => {
  if (news.style.display === "none") {
    news.style.display = "block";
    news_button.innerHTML = "Show less 🡡";
  } else {
    news.style.display = "none";
    news_button.innerHTML = "Show more 🡣";
  }
});

const groups_button = document.querySelector("#groups_button");
const groups = document.querySelector("#hide_groups");

groups_button.addEventListener("click", () => {
  if (groups.style.display === "none") {
    groups.style.display = "block";
    groups_button.innerHTML = "Show less 🡡";
  } else {
    groups.style.display = "none";
    groups_button.innerHTML = "Show more 🡣";
  }
});

const hash_button = document.querySelector("#hashtag_button");
const hashtags = document.querySelector("#hide_hash");

hash_button.addEventListener("click", () => {
  if (hashtags.style.display === "none") {
    hashtags.style.display = "block";
    hash_button.innerHTML = "Show less 🡡";
  } else {
    hashtags.style.display = "none";
    hash_button.innerHTML = "Show more 🡣";
  }
});
