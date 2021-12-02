document.getElementById('uptitle').innerHTML = "Owh Gallery Store";

function mainFunc() {
    var x = document.getElementsByClassName("subheading");
    x[0].innerHTML = "All the inspiration is here!";
}

function menuFunc() {
    const listItem = document.querySelector("li:last-child");

    const newItem = document.createElement('li');
    newItem.innerHTML = '<a class="nav-link" href="#" style="color: white; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;">Just try DOM Manipulate</a>';

    listItem.parentNode.replaceChild(newItem, listItem);
}