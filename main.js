var canvas = new fabric.canvas('My_Canvas');
var x = document.getElementById("My_Audio");

function new_image() {
    fabric.Image.fromURL("Birthday_Image.jpg", function(Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({top:0, left:0});
    canvas.add(block_image_object);
    })
}

function new_image() {
    fabric.Image.fromURL("Birthday_Image.jpg", function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({top:0, left:0});
        canvas.add(block_image_object);
        }) 
}

function play_Sound() {
    x.play();
}