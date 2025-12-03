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
        genres: ["Christmas", "Pop"],
        spotify: "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn"
}]


function show(song){
    const container = document.querySelector(".songs");
    container.insertAdjacentHTML("afterbegin", `
        <div class="card" name = "${song.name}" artist ="${song.artists}" genre ="${song.genres}">
            <h2>${song.name}</h2> 
            <h3>${song.artists}</h3>
            <p>Genres: ${song.genres}</p>
            <a href = "${song.spotify}">
                <button class="msc"> Listen on Spotify </button>
            </a>
        </div>
    `)
}

playlist.forEach(song => {
    show(song);
})

const cards = document.querySelectorAll(".card");

function fltr(ask){
    cards.forEach(card => {
        if(card.getAttribute("name").toLowerCase().includes(ask)||card.getAttribute("genre").toLowerCase().includes(ask)||card.getAttribute("artist").toLowerCase().includes(ask)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
}


document.querySelector('#search').addEventListener('submit', ask =>{
    ask.preventDefault();
    let input = document.querySelector('#input').value.toLowerCase();
    fltr(input);
})


////////////////////////////////////////////////////    LIGHT/DARK MODES

document.querySelector('.mode').addEventListener('click', change =>{
    const root = document.querySelector(':root');
    const gstyle = getComputedStyle(root);
    if (gstyle.getPropertyValue('--primary') === gstyle.getPropertyValue('--light-bg')){
        root.style.setProperty('--primary', gstyle.getPropertyValue('--dark-bg'));
        root.style.setProperty('--scd', gstyle.getPropertyValue('--dark-scd'));
        root.style.setProperty('--fnt', gstyle.getPropertyValue('--dark-fnt'));
    }else {
        root.style.setProperty('--primary', gstyle.getPropertyValue('--light-bg'));
        root.style.setProperty('--scd', gstyle.getPropertyValue('--light-scd'));
        root.style.setProperty('--fnt', gstyle.getPropertyValue('--light-fnt'));
    }

})


//////////////////////////////////////////////////////////// ALBUM ART



/////////////////////////////////////////////////////////// ADD 

const cons = document.querySelector