document.addEventListener("DOMContentLoaded", function () {
    let
        box1 = document.getElementById("box1");
        box2 = document.getElementById("box2");
        drag_img = document.getElementById("logo");

                //dragstart

                drag_img.addEventListener("dragstart", function (event) {
                    drag(event);
                });


                //dragover

                box2.addEventListener("dragover", function (event) {
                    event.preventDefault();
                });


                //drop
                box2.addEventListener("drop", function (event) {
                    drop(event);
                });

    });

    function drag(e) {
        e.dataTransfer.setData("image", event.target.id);
    }

    function drop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("image");
        e.target.appendChild(document.getElementById(data));
    }