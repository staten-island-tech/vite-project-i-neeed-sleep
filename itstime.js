import "./style.css"

let playlist = [{
        name: "You're Magical", 
        artists:["Elisa Rosselli", "Winx Club"],
        genres: ["Cartoon", "Pop"],
        spotify: "https://open.spotify.com/track/7rROo4K5ZOCIkJ2uPtHWI4"
    },{
        name: "Never Gonna Give You Up", 
        artists:["Rick Astley"],
        genres: ["Pop"],
        spotify: "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
    },{
        name: "All I Want For Christmas Is You", 
        artists:["Mariah Carey"],
        genres: ["Christmas", "Holiday", "Pop"],
        spotify: "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn"
}]


function show(song){
    const container = document.querySelector(".songs");
    container.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <h2>${song.name} by ${song.artists}</h2>
            <p>Genres: ${song.genres}</p>
            <a href = "${song.spotify}">
                <button class="msc"> Listen on Spotify </button>
            </a>
        </div>
    `)
}

for (i in playlist){
    show(i);
}

const card = document.querySelectorAll(".card");

function fltr(ask){
    for (i in card){
        if(i.name.lowercase() === ask.lowercase()){
            card.style.display = "block";
        }if(i.genre.lowercase() === ask.lowercase()){
            card.style.display = "block";
        }if(i.artists.lowercase() === ask.lowercase()){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
}

document.getElementById('searchbar').addEventListener('input', ask =>{
    fltr(ask);
})


////////////////////////////////////////////////////

const m = document.querySelector(".toggle");
const body = document.querySelector("body");

m.innerHTML("afterbegin",`
    <button class = "mode" opcurrent = "dark">Light Mode</button>
`)

function mode (mode){
    m.innerHTML("afterbegin",`
    <button class = "mode">${mode} Mode</button>
    `)
    card.style.backgroundColor = `var(--${mode}-bg)`;
    document.querySelector("p","h3","h2","h1").style.color = `var(--${mode}-fnt)`;
    document.querySelector("body").style.color = `var(--${mode}-scd)`;
}

document.querySelector('.mode').addEventListener('click', change =>{
    oppCurrent = document.querySelector('.mode').

})
