
try {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json",
        },
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayJoke(data.joke);
        });
} catch (error) {
    console.error("Error: ", error);
};

function displayJoke(joke) {
    const body = document.querySelector('#dad-joke');
    const p = document.createElement('p');
    p.textContent = joke;
    body.appendChild(p);
}


$(document).ready(function(){
    const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=funny&api_key=awEx0G1tfuWQDbz6jXdFEHAwoYmpdiyA");
    //const xhr = $.get("http://api.giphy.com/v1/gifs/random?tag=funny&api_key=awEx0G1tfuWQDbz6jXdFEHAwoYmpdiyA");
    xhr.done(function(gif) { console.log("success got data", gif); displayGif(gif.data[3].images.original.url)});
});

function displayGif(url) {
    console.log(url);
    const img = $('<img>').attr('src', url).attr('alt', 'funny');
    $('#image-container').append(img);
}