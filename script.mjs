const getEmote = await fetch("https://emojihub.yurace.pro/api/random");
const newEmote = await getEmote.json();

console.log(newEmote.name);