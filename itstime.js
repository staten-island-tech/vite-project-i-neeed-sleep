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

function add(list){
    for (i in playlist){
        show(i);
    }
}

function fltr(ask){
    for (i in playlist){
        if(i.name.lowercase() == ask.lowercase()){
            
        } else{

        }
    }
}


