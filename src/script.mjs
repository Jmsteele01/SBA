const getEmote = await fetch("https://emojihub.yurace.pro/api/random");
const newEmote = await getEmote.json();
const getAllEmotes = await fetch("https://emojihub.yurace.pro/api/all");
const allEmotes = await getAllEmotes.json();

console.log("Fuck");

const opening = document.body.querySelector(".opening");
let title = document.createElement("h1");
opening.appendChild(title);
title.textContent = "Foobar"

// let showResults = document.createElement("p")

// opening.textContent = "This is a search thing."

document.getElementById("search_by_name_btn").addEventListener("click", search);

function search()
{
    let currentSearch = document.getElementById("search_bar")
    console.log("HI!");

}

