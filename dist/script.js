function doColor(){
  var canvas = document.getElementById("can");
  var newBackColor = document.getElementById("clr").value;
  canvas.style.backgroundColor = newBackColor;
}


function doSquare(){
  canvas = document.getElementById("can");
  ctx = canvas.getContext("2d");
  
  ctx.fillStyle = "black";
  amOfRect= document.getElementById("slr").value;
  
  ctx .clearRect(0,0,canvas.width,canvas.height);

  //ctx.fillRect(10, 10,amOfRect,amOfRect);
  
  for (var i = 0; i < amOfRect; i = i + 1) {
    ctx.fillRect(40 * i, 50, 36, 36);
  }


 
}