var index = 0;
const MAX_INDEX = 2;

var pictures = document.getElementsByClassName("picture");
var current_picture = pictures[index];

var project_titles = document.getElementsByClassName("project_title");
var current_project_title = project_titles[index];

var creator_titles = document.getElementsByClassName("creator_title");
var creator_contents = document.getElementsByClassName("creator_content");
var current_creator_title = creator_titles[index];
var current_creator_content = creator_contents[index];

var credits_titles = document.getElementsByClassName("credits_title");
var credits_contents = document.getElementsByClassName("credits_content");
var current_credits_title = credits_titles[index];
var current_credits_content = credits_contents[index];

var text_contents = document.getElementsByClassName("text_content");
var current_text_content = text_contents[index];

var elements = [pictures, project_titles, creator_titles, creator_contents, credits_titles,
                credits_contents, text_contents];
var current_elements = [current_picture, current_project_title, current_creator_title,
                    current_creator_content, current_credits_title, current_credits_content,
                    current_text_content];

var button_left = document.getElementById("left_button");
button_left.addEventListener("click", function(){
    advance_credits(-1);
})

var button_right = document.getElementById("right_button");
button_right.addEventListener("click", function(){
    advance_credits(1);
})

function advance_credits(direction) {
    index += direction;
    if (index < 0)
        index = MAX_INDEX;
    else if (index > MAX_INDEX)
        index = 0;

    console.log(index);

    for (var i = 0; i < elements.length; i++) {
        current_elements[i].classList.add("hide");
        current_elements[i] = elements[i][index];
        current_elements[i].classList.remove("hide");
    }
}


