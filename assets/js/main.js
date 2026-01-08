/*menú navegación */
function openMenu(){
    $("#menu > div > ul").css("left", "0");
}

function closeMenu(){
    $("#menu > div > ul").css("left", "-100%");
}

/*Modal imagenes*/

function openModal(figura) {
    $("#modal > figure > img").attr("src", $(figura).find("img").attr("src"));
    $("#modal > figure > figcaption").html($(figura).find("figcaption").html());
    $("#modal").css("display", "flex");
}

function closeModal() {
    $("#modal").css("display", "none");
}