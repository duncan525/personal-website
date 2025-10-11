var project = document.getElementById("select_project");
project.addEventListener("change", function() {
    change_project(project.value);
})

var which_project = 1;

var p1_panels = document.getElementsByClassName("p1 panel");
var p1_panel_titles = document.getElementsByClassName("p1 panel_title");
var p2_panels = document.getElementsByClassName("p2 panel");
var p2_panel_titles = document.getElementsByClassName("p2 panel_title");

var project_panels = [];
project_panels.push(p1_panels);
project_panels.push(p2_panels);

var project_panel_titles = [];
project_panel_titles.push(p1_panel_titles);
project_panel_titles.push(p2_panel_titles);

var panels = p1_panels;
var panel_titles = p1_panel_titles;
var current_panel = 0;

var screenshots = document.getElementsByClassName("img");
var screenshot_titles = document.getElementsByClassName("img_title");
var current_screenshot = 0;

var buttons = document.getElementsByClassName("nav_button");

for (var i = 0; i < buttons.length; i++) {
    // apparently "var" only ever refers to a single button, which will be updated as the loop continues
        // ...so i end up getting a single eventlistener that considers every button to be the last one?
    // the fix: "let" works as I originally expected "var" to
    let button = buttons[i]; 

    button.addEventListener("click", function(){
        advance_page(this.classList[1], this.classList[2]);
    })
}

function advance_page(which_buttons, direction) {
    if (which_buttons == "info") {

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

    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add("hide");
        panel_titles[i].classList.add("hide");
    }

    panels = project_panels[which_project-1];
    panel_titles = project_panel_titles[which_project-1];
    panels[0].classList.remove("hide");
    panel_titles[0].classList.remove("hide");
    current_panel = 0;
}