window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const astronautContainer = document.getElementById("container");
            let astronaut = "";
            for (astronaut of json) {
            astronaut = 
            `
            <div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}"/>
         </div>
         `;
         astronautContainer.innerHTML += astronaut;
            }
        });
    });
});