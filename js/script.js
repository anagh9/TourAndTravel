console.log("hello");

function mouseDown(ev) {
    console.log("kmkm");
    ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (
        target.type == "text" ||
        target.type == "checkbox" ||
        target.type == "radio" ||
        target.type == "submit" ||
        target.type == "reset" ||
        target.type == "button" ||
        target.type == "file" ||
        target.type == "image" ||
        target.type == "select"
    ) {
        // Do Nothing
    } else {
        return false;
    }
}