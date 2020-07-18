document.addEventListener("DOMContentLoaded", function () {
    let
        box1 = document.getElementById("box1");
        box2 = document.getElementById("box2");
        drag_img = document.getElementById("logo");

                //dragstart

                drag_img.addEventListener("dragstart", function (event) {
                    //drag(event);
                e.dataTransfer.setData("image", event.target.id);
                });

                
                //dragover

                box2.addEventListener("dragover", function (event) {
                    event.preventDefault();
                });

    });