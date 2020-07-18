document.addEventListener("DOMContentLoaded", function () {
    let
        box1 = document.getElementById("box1");
        box2 = document.getElementById("box2");
        drag_img = document.getElementById("logo");

                //dragstart

                drag_img.addEventListener("dragstart", function (event) {
                    //drag(event);
                event.dataTransfer.setData("image", event.target.id);
                });


                //dragover

                box2.addEventListener("dragover", function (event) {
                    event.preventDefault();
                });


                //drop
                box2.addEventListener("drop", function (event) {
                    //drop(event);
                    event.preventDefault();
                    let data = event.dataTransfer.getData("image");
                    event.target.appendChild(document.getElementById(data));
                });

    });