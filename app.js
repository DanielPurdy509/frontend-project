var getSpaceLaunches = function () {

    for(let i = 0; i <   ; i ++){
        document.createElement("li");

    }

}

$.get(`https://ll.thespacedevs.com/2.2.0/launch/`, (data) => {

    console.log(data);

    let launchList = document.getElementById("launch-list");
    
    for(let i = 0; i < data.results.length; i++){
        let launch = document.createElement("li");
        launch.innerHTML = data.results[i].name
        
        let launchImg = document.createElement("img");
        launchImg.src = data.results[i].image;
        launchImg.onerror = function() {launchImg.src = "no-image-available-md.png"};
        launch.append(launchImg);
            launchList.append(launch);
    }
    })





// let spaceXLaunches = $.get("https://api.spacexdata.com/v5/launches/latest", (data) => {

// console.log(data);
// })