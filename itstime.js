let playlist = [{
        name: "You're Magical", 
        artists:["Elisa Rosselli", "Winx Club"],
        genres: ["Cartoon", "Pop"],
        spotify: "https://open.spotify.com/track/7rROo4K5ZOCIkJ2uPtHWI4"
    },{
        name: "Never Gonna Give You Up", 
        artist:["Rick Astley"],
        genres: [""],
        spotify: ""
    },{
        name: "", 
        artist:[""],
        genres: [""],
        spotify: ""
}]


function show (){

}

function fltr(ask){
    for (i in playlist){
        if(i.name.lowercase() == ask.lowercase()){
            show();
        }
    }
}

function add(list){

}
