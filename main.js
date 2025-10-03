// deal with issue reporting form
var submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click", sendInfo)

function sendInfo() {
    var test_input = document.getElementById("test_input");
    console.log(test_input.value);
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
    } else {
        parent.classList.add("dropped");
    }

    console.log(this.classList);
    console.log("dropped down");
    
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
descriptions[0][0] = "This is a description of the project to the left. Maybe the description continues, and then \
                    continues further. At this point, I must have described enough to end the paragraph."
descriptions[0][1] = "Here is another paragraph of description. Hopefully, by now, I've given a clear and concise \
                    description of this project. Perhaps I will even include a link <strong>here</strong>."

descriptions[1] = new Array(2)
descriptions[1][0] = "This is paragraph 1 of the description for The Sodfather."
descriptions[1][1] = "This is paragraph 2 of the description for The Sodfather."

descriptions[2] = new Array(2)
descriptions[2][0] = "This is paragraph 1 of the description for this website."
descriptions[2][1] = "whoa... thats meta..."

var left_button = document.getElementById("left_button")
left_button.addEventListener("click", function() {
    changeProject(-1);
})

var right_button = document.getElementById("right_button")
right_button.addEventListener("click", function() {
    changeProject(1);
})

function changeProject(direction) {
    console.log(direction);
    if (current_index == 0 && direction == -1) {
        console.log("just looped backwards");
        current_index = (images.length-1);
    } else if (current_index == images.length - 1 && direction == 1) {
        console.log("just looped forwards");
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
