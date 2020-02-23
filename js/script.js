

const baseUrl = "https://rickandmortyapi.com/api/character";
function handleResponse(response) {
        return response.json();
    }
    
    function handleJson(json) {
        console.dir(json);
    }
    
    function handleError(error) {
        console.log(error);
    }
    
    fetch(baseUrl)
        .then(handleResponse)
        .then(handleJson)
        .catch(function() {
            document.location.href = "error.html";
        });
    
        function handleJson(json) {
            console.dir(json);
        }
        function handleJson(json) {

            const result = json.results;
        
            result.forEach(function(results) {
                console.dir(results);
            });
            
            const image = document.querySelector(".image");
            image.alt = json.name;
        
            if (json.image) {
                image.src = json.image;
            } else if (json.image_background) {
                image.src = json.image_background;
            } else {
                image.src = "https://via.placeholder.com/300";
            }
        
      const containerContent = document.querySelector(".row.results");
        
        let html = "";

        result.forEach(function(results){
         
      
        
             html += `<div class="col-sm-6 col-md-4 col-lg-3">                
             <div class="card">
             <img class="image" src="https://via.placeholder.com/300" alt="Character Name" ${image.src}>            
             <div class="details">
                     <h4 class="name">${results.name}</h4>
                     <p>Type:${results.type}</p>    
                     <p>Episode count: ${results.episode.length}</p>                                       
                     <a class="btn btn-primary" href="details.html?id=1234">${results.id}</a>
                     </div>
             </div>
         </div>`;
});


        containerContent.innerHTML = html;

    }
       
