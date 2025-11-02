// deal with issue reporting form
var submit_button = document.getElementById("submit_button");
var input_error = document.getElementById("input_error")
var is_hover = false;


submit_button.addEventListener("mouseenter", function() {
    is_hover = true;

    this.style.background = "darkgrey";
    this.style.color = "rgb(231, 231, 231)";
})

submit_button.addEventListener("mouseleave", function() {
    is_hover = false;

    this.style.background = "white";
    this.style.color = "grey";
})

submit_button.addEventListener("mousedown", function() {
    this.style.background = "grey";
    this.style.color = "white";
})

submit_button.addEventListener("mouseup", function() {
    if (!is_hover) {
        this.style.background = "white";
        this.style.color = "grey";
    } else {
        this.style.background = "darkgrey";
        this.style.color = "rgb(231, 231, 231)";
    }
})

submit_button.addEventListener("click", sendInfo);

function sendInfo() {
    var project = document.getElementById("select_project");
    var issue = document.getElementById("issue_description");
    var email = document.getElementById("email");

    var form_info = new Array([project, issue, email])
    var can_log = true;

    if (project.value == "") {
        project.style.borderColor = "red";
        can_log = false;
    }

    if (issue.value == "") {
        issue.style.borderColor = "red";
        can_log = false;
    }

    if (email.value == "") {
        email.style.borderColor = "red";
        can_log = false;
    }

    if (can_log) {
        console.log(form_info);

        project.style.borderColor = "white";
        issue.style.borderColor = "grey";
        email.style.borderColor = "grey";

        project.value = "";
        issue.value = "";
        email.value = "";
    }
}

// deal with dropdown boxes section
var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].children[0].addEventListener("click", drop_down);
}

function drop_down() {
    var parent = this.parentNode;

    if (parent.classList.contains("dropped")) {
        parent.classList.remove("dropped");
        this.style.top = "-5px";
    } else {
        parent.classList.add("dropped");
        this.style.top = "0px";
    }

}

// deal with project section
var project_img = document.getElementById("right")
var title_text = document.getElementById("title_text")
var par_1 = document.getElementById("par_1")
var par_2 = document.getElementById("par_2")

var current_index = 0
var images = new Array(3)
images[0] = "images/FirstGameImg.png"
images[1] = "images/TheSodfather.png"
images[2] = "images/ThisWebsite.png"

var titles = new Array("Untitled Game", "The Sodfather", "This Website")
var descriptions = new Array(images.length)

descriptions[0] = new Array(2)
descriptions[0][0] = "I started this project after a friend of mine asked me to participate in the \
                    <a href='https://itch.io/jam/gmtk-2025'>GMTK Game Jam 2025</a> with him. It was initially \
                    a small, \"learn by doing\" project after learning the ropes of Godot and GDScript on \
                    Youtube, but I got attached."
descriptions[0][1] = "I hope to tie up some loose ends and \"release\" it by the end of the year. All the \
                    code and art is my work. I want to make some sound effects and music as well, but those are \
                    secondary goals."

descriptions[1] = new Array(2)
descriptions[1][0] = "<em>The Sodfather</em> (patent pending) is the result of the game jam! It was a crazy \
                    few days. My friend and I spent many hours in a local coffee shop throwing it together."
descriptions[1][1] = "It was my first time using git and Github. There was a lot of back-and-forth to make sure \
                    we didn't mess with the same project files and end up losing some work on the next push/pull."

descriptions[2] = new Array(2)
descriptions[2][0] = "This website is the result of my joining BU's chapter of <a href=\"https://upe.acm.org/\"> \
                    Upsilon Pi Epsilon</a>. I had to make \
                    a project over the span of a month, and I thought it would be cool to get familiar with \
                    HTML, CSS, and Javascript."
descriptions[2][1] = "If the website isn't an ongoing project, I don't know what is. I'll add more pages, a \
                    working mobile layout, and some backend stuff down the road."

var left_button = document.getElementById("left_button")
left_button.addEventListener("click", function() {
    changeProject(-1);
})

var right_button = document.getElementById("right_button")
right_button.addEventListener("click", function() {
    changeProject(1);
})

function changeProject(direction) {
    if (current_index == 0 && direction == -1) {
        current_index = (images.length-1);
    } else if (current_index == images.length - 1 && direction == 1) {
        current_index = 0;
    } else {
        current_index += direction;
    }

    project_img.src = images[current_index];
    title_text.innerHTML = "<strong><u>" + titles[current_index].toString() + "</u></strong>";
    par_1.innerHTML = descriptions[current_index][0];
    par_2.innerHTML = descriptions[current_index][1];
}


function goLeft() {
    if (current_index == 0) {
        current_index = (images.length-1)
    } else {
        current_index -= 1;
    }

    project_img.src = images[current_index]
    title_text.innerHTML = "<strong><u>" + titles[current_index].toString() + "</u></strong>"
    par_1.innerHTML = descriptions[current_index][0]
    par_2.innerHTML = descriptions[current_index][1]
}

function goRight() {
    if (current_index == (images.length-1)) {
        current_index = 0
    } else {
        current_index += 1;
    }

    project_img.src = images[current_index]
    project_img.src = images[current_index]
    title_text.innerHTML = "<strong><u>" + titles[current_index].toString() + "</u></strong>"
    
}