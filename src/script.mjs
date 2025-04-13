const getEmote = await fetch("https://emojihub.yurace.pro/api/random");
const newEmote = await getEmote.json();
const getAllEmotes = await fetch("https://emojihub.yurace.pro/api/all");
const allEmotes = await getAllEmotes.json();
const randomEmote = newEmote.htmlCode[0];

const opening = document.body.querySelector(".opening");
const results = document.body.querySelector(".results");
let title = document.createElement("h1");
opening.appendChild(title);
title.innerHTML = `${randomEmote} Emoji World!!! ${randomEmote}`

allEmotes.forEach(emote => {
    const ul = document.createElement("ul");
    ul.innerHTML = emote.htmlCode[0]
    results.appendChild(ul);
});

document.getElementById("search_by_name_btn").addEventListener("click", search);

function search()
{
    const currentSearch = document.getElementById("search_bar")
    console.log("HI!");
    results.textContent = "";
    allEmotes.forEach(emote => {
        let foundEmote = emote.name.toLowerCase().includes(currentSearch.value.toLowerCase())
        if(foundEmote)
        {
            const ul = document.createElement("ul");
            ul.innerHTML = emote.htmlCode[0]
            results.appendChild(ul);
        }
    });
}

