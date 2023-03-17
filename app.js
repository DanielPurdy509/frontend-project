
$.get(`https://ll.thespacedevs.com/2.2.0/launch/`, (data) => {

    let launchList = document.getElementById("launch-list");
    
    for(var i = 0; i < data.results.length; i++){
        let launch = document.createElement("div");
        launch.classList.add("launch-card")

        let launchTitle = document.createElement("div")
            launchTitle.innerText = data.results[i].name;
            launchTitle.classList.add("launch-title");
            launch.append(launchTitle);
        
        let launchImg = document.createElement("img");
        launchImg.setAttribute("id","launch-image");
        launchImg.src = data.results[i].image;
        launchImg.onerror = function() {launchImg.src = "no-image-available-md.png"};

        getLaunchInfo(launch, i);

        launch.append(launchImg);
        launchList.append(launch);
    }
    })

function getLaunchInfo(launch, i) {

    $.get(`https://ll.thespacedevs.com/2.2.0/launch/`, (data) => {

    let showDetails = document.createElement("button");
        showDetails.innerText = "Show Details"
        launch.append(showDetails);

    let launchInfo = document.createElement("div");
        launchInfo.setAttribute("id","launch-info")

    let launchOrg = document.createElement("div");
        launchOrg.innerHTML = `Organization: ${data.results[i].launch_service_provider.name}`;
        launchInfo.append(launchOrg);

    let launchDate = document.createElement("div");
        let date = data.results[i].window_start.substring(0,9);
        launchDate.innerHTML = `Launch Date: ${date}`;
        launchInfo.append(launchDate);

    let launchMission = document.createElement("div");
        launchMission.innerHTML = `Mission Description: ${data.results[i].mission.description}`;
        launchInfo.append(launchMission);

    let launchStatus = document.createElement("div");
        launchStatus.innerHTML = `Mission Outcome: ${data.results[i].status.name}. ${data.results[i].status.description}`;
        launchInfo.append(launchStatus);

    launch.append(launchInfo);

    launchInfo.style.visibility = "hidden";

    showDetails.addEventListener("click", function toggleInfo() {
        console.log("Button Clicked")
        if (launchInfo.style.visibility == "hidden") {
          launchInfo.style.visibility = "visible";
          showDetails.innerText = "Hide Details";
        } else {
          launchInfo.style.visibility = "hidden";
          showDetails.innerText = "Show Details";
        }
      })

    })

}



