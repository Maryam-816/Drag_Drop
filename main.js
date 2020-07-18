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


                //drop(event);
                
                box2.addEventListener("drop", function (event) {
                    event.preventDefault();
                    let data = e.dataTransfer.getData("image");
                    e.target.appendChild(document.getElementById(data));
                });

    });