const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "details.html?id=1234";
}

const baseUrl = `https://rickandmortyapi.com/api/character/`;
const detailUrl = `${baseUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        detailDetails(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function detailDetails(json) {
    console.dir(json);

    const image = document.querySelector(".detail-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector(".value");
    name.innerHTML = json.name;   
}
