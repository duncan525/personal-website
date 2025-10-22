var project = document.getElementById("select_project");
project.addEventListener("change", function() {
    change_project(project.value);
})

var which_project = 1;

var buttons = document.getElementsByClassName("nav_button");

// arrays for project takeaways, project links
var p1_takeaways = document.getElementsByClassName("p1 takeaways_content")[0]; // why do i need to index here?? is it bc of the ul/li stuff?
var p2_takeaways = document.getElementsByClassName("p2 takeaways_content")[0];
var p3_takeaways = document.getElementsByClassName("p3 takeaways_content")[0];
var project_takeaways = [];
project_takeaways.push(p1_takeaways, p2_takeaways, p3_takeaways);

var p1_links = document.getElementsByClassName("p1 links")[0];
var p2_links = document.getElementsByClassName("p2 links")[0];
var p3_links = document.getElementsByClassName("p3 links")[0];
var project_links = [];
project_links.push(p1_links, p2_links, p3_links);

// arrays for project panels and panel titles
var p1_panels = document.getElementsByClassName("p1 panel");
var p2_panels = document.getElementsByClassName("p2 panel");
var p3_panels = document.getElementsByClassName("p3 panel");
var project_panels = [];
project_panels.push(p1_panels, p2_panels, p3_panels);

var p1_panel_titles = document.getElementsByClassName("p1 panel_title");
var p2_panel_titles = document.getElementsByClassName("p2 panel_title");
var p3_panel_titles = document.getElementsByClassName("p3 panel_title");
var project_panel_titles = [];
project_panel_titles.push(p1_panel_titles, p2_panel_titles, p3_panel_titles);

// arrays for project screenshots and screenshot titles
var p1_screenshots = document.getElementsByClassName("p1 img");
var p2_screenshots = document.getElementsByClassName("p2 img");
var p3_screenshots = document.getElementsByClassName("p3 img");
var project_screenshots = [];
project_screenshots.push(p1_screenshots, p2_screenshots, p3_screenshots);

var p1_screenshot_titles = document.getElementsByClassName("p1 img_title");
var p2_screenshot_titles = document.getElementsByClassName("p2 img_title");
var p3_screenshot_titles = document.getElementsByClassName("p3 img_title");
var project_screenshot_titles = [];
project_screenshot_titles.push(p1_screenshot_titles, p2_screenshot_titles, p3_screenshot_titles);

// working values for all content
var panels = p1_panels;
var panel_titles = p1_panel_titles;
var current_panel = 0;

var screenshots = p1_screenshots;
var screenshot_titles = p1_screenshot_titles;
var current_screenshot = 0;

var takeaways = p1_takeaways;

var links = p1_links;

// enable buttons; pass appropriate fields to advance_page
for (var i = 0; i < buttons.length; i++) {
    // apparently "var" only ever refers to a single button, which will be updated as the loop continues
        // ...so i end up getting a single eventlistener that considers every button to be the last one?
    // the fix: "let" works as I originally expected "var" to
    let button = buttons[i]; 

    button.addEventListener("click", function(){
        advance_page(this.classList[1], this.classList[2]);
    })
}

// change page or screenshot depending on which button was pressed
function advance_page(which_buttons, direction) {
    // deal with panels
    if (which_buttons == "panel") {

        panels[current_panel].classList.add("hide");
        panel_titles[current_panel].classList.add("hide");

        if (direction == "left") {
            if (current_panel == 0)
                current_panel = panels.length-1;
            else current_panel--;
        } else {
            if (current_panel == panels.length-1)
                current_panel = 0;
            else current_panel++;
        }

        panels[current_panel].classList.remove("hide");
        panel_titles[current_panel].classList.remove("hide");

    // deal with screenshots
    } else if (which_buttons == "screenshot") {
        screenshots[current_screenshot].classList.add("hide");
        screenshot_titles[current_screenshot].classList.add("hide");
        
        if (direction == "left") {
            if (current_screenshot == 0)
                current_screenshot = screenshots.length-1;
            else current_screenshot--;
        } else {
            if (current_screenshot == screenshots.length-1) {
                current_screenshot = 0;
            } else current_screenshot++;
        } 
            
        screenshots[current_screenshot].classList.remove("hide");
        screenshot_titles[current_screenshot].classList.remove("hide");

    }

}

function change_project(project) {
    which_project = project;

    // hide current panels and switch to new project
    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add("hide");
        panel_titles[i].classList.add("hide");
    }

    panels = project_panels[which_project-1];
    panel_titles = project_panel_titles[which_project-1];
    panels[0].classList.remove("hide");
    panel_titles[0].classList.remove("hide");
    current_panel = 0;

    // hide current screenshots and switch to new project
    for (var i = 0; i < screenshots.length; i++) {
        screenshots[i].classList.add("hide");
        screenshot_titles[i].classList.add("hide");
    }

    screenshots = project_screenshots[which_project-1];
    screenshot_titles = project_screenshot_titles[which_project-1];
    screenshots[0].classList.remove("hide");
    screenshot_titles[0].classList.remove("hide");
    current_screenshot = 0;

    // change to appropriate takeaways
    takeaways.classList.add("hide");
    takeaways = project_takeaways[which_project-1];
    takeaways.classList.remove("hide");

    // change to appropriate project links
    links.classList.add("hide");
    links = project_links[which_project-1];
    links.classList.remove("hide");
}

// deal with portrait detection on non-index pages (TEMPORARY fix for formatting problem)

    // detect portait mode on mobile (on load) and alert accordingly
    if (screen.availHeight > screen.availWidth) {
        alertPortrait();
    }

    // ensure changing to portrait after load still alerts
    screen.orientation.addEventListener("change", function() {
        if (screen.availHeight > screen.availWidth) {
            alertPortrait();
        }
    }
    )

    function alertPortrait() {
        if (document.title != "Luke Duncan") {
            alert("This page is best viewed in landscape mode!");
        }
    }