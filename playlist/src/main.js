import "./style.css"

let playlist = [{
        name: "You're Magical", 
        artists:["Elisa Rosselli", "Winx Club"],
        genre: "Cartoon",
        spotify: "https://open.spotify.com/track/7rROo4K5ZOCIkJ2uPtHWI4"
    },{
        name: "Never Gonna Give You Up", 
        artists:["Rick Astley"],
        genre: "Pop",
        spotify: "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
    },{
        name: "All I Want For Christmas Is You", 
        artists:["Mariah Carey"],
        genre: "Christmas",
        spotify: "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn"
}]


function show(song){
    const container = document.querySelector(".songs");
    container.insertAdjacentHTML("afterbegin", `
        <div class="card" name = "${song.name}" artist ="${song.artists}" genre ="${song.genres}">
            <h2>${song.name}</h2> 
            <h3>${song.artists}</h3>
            <p class="${song.genre.toLowerCase()}">Genre: ${song.genre}</p>
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
    let input = document.querySelector('#srch').value.toLowerCase();
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

document.querySelector('#art').addEventListener('submit', ask =>{
    ask.preventDefault();
    const output = document.querySelector(".art");
    let art = document.querySelector('#arte').value;
    output.innerHTML = `<img src = "${art}" class = "img" height = "200px">`;
})

/////////////////////////////////////////////////////////// ADD SONG

function ADD(){
    const output = document.querySelector(".songs");
    let nameB = document.querySelector('.nameB').value;
    let artistB = document.querySelector('.artistB').value;
    let genreB = document.querySelector('.genreB').value;
    let genreD =  genreB.charAt(0).toUpperCase() + genreB.slice(1);
    let linkB = document.querySelector('.linkB').value;
    output.insertAdjacentHTML("afterbegin", `
        <div class="card" name = "${nameB}" artist ="${artistB}" genre ="${genreB}">
            <h2>${nameB}</h2> 
            <h3>${artistB}</h3>
            <p class="${genreB.toLowerCase()}">Genre: ${genreD}</p>
            <a href = "${linkB}">
                <button class="msc"> Listen on Spotify </button>
            </a>
        </div>
    `)
}


document.querySelector('#addw').addEventListener('click', event =>{
    event.preventDefault();
    ADD();
})

////////////////////////////////////////////////// Color GENRE

document.querySelector('#color').addEventListener('click', event =>{
    event.preventDefault();
    let colorG = document.querySelector('.colorG').value.toLowerCase();
    let nameG = document.querySelector('.nameG').value;
    document.querySelector(`.${nameG}`).style.color = `${colorG}`;
})
