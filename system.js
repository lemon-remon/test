const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")




let scrollx = 450;
let y = 380;
let dy = 0;
let dx = 0;
let dir = "right";
let g = 0.5;
let isjump = false;
let blocksize = 40;
let fall = false;

//item
let lookMush1 = false;


function init (){
    scrollx = 450;
    y = 380;
    dy = 0;
    dx = 0;
    dir = "right";
    g = 0.45;
    isjump = false;
    blocksize = 40;
    fall = false;
}

function de (){
    console.log(scrollx);
}










let playerRight = new Image();
playerRight.src = "draw/malio.right.gif";
playerRight.onload = checkAllImagesLoaded;

let playerLeft = new Image();
playerLeft.src = "draw/malio.left.gif";
playerLeft.onload = checkAllImagesLoaded;

let block = new Image();
block.src = "draw/z.jpg";
block.onload = checkAllImagesLoaded;

let renga = new Image();
renga.src = "draw/block.gif";
renga.onload = checkAllImagesLoaded;

let question = new Image();
question.src = "draw/_block.gif";
question.onload = checkAllImagesLoaded;

let mush = new Image();
mush.src = "draw/mush.gif";
mush.onload = checkAllImagesLoaded;



let imagesLoaded = 0;

function checkAllImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 6) { // 5枚全部ロードできたら
        window.setInterval(draw, 16);
    }
}











function checkHit(){
    isjump = true
    Tofall();
    //初めのはてなブロック
    //up
if (y <= 220 && y >= 210) {
    if (scrollx <= -35 && scrollx >= -105 && dy >= 0) {
        y = 219;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -35 && scrollx >= -105 && y >= 300 &&y <= 310 && dy <= 0 ){
        y = 300
        dy = 0
        lookMush1 = true
    }
    //left
    if(scrollx <= -30 && scrollx >= -68 && y >= 220 && y <= 285 ){
        scrollx = -30
    }
    //right
    if(scrollx <= -70 && scrollx >= -110 && y >= 220 && y <= 285 ){
        scrollx = -110
    }


    
    //三連続ブロック

        //up
if (y <= 220 && y >= 207) {
    if (scrollx <= -912 && scrollx >= -1068 && dy >= 0) {
        y = 217;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -912 && scrollx >= -1068 && y >= 300 &&y <= 310 && dy <= 0 ){
        y = 300
        dy = 0
    }
    //left
    if(scrollx <= -900 && scrollx >= -950 && y >= 225 && y <= 285 ){
        scrollx = -910
    }
    //right
    if(scrollx <= -1020 && scrollx >= -1070 && y >= 225 && y <= 285 ){
        scrollx = -1070
    }
  
  
  
    //上の一個
     //up
if (y <= 60 && y >= 43) {
    if (scrollx <= -952 && scrollx >= -1028 && dy >= 0) {
        y = 60;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -952 && scrollx >= -1028 && y >= 140 &&y <= 150 && dy <= 0 ){
        y = 140
        dy = 0
    }
    //left
    if(scrollx <= -950 && scrollx >= -990 && y >= 65 && y <= 135 ){
        scrollx = -950
    }
    //right
    if(scrollx <= -990 && scrollx >= -1030 && y >= 65 && y <= 135 ){
        scrollx = -1030
    }



    //２個めの三連
            //up
if (y <= 220 && y >= 207) {
    if (scrollx <= -2150 && scrollx >= -2310 && dy >= 0) {
        y = 217;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -2148 && scrollx >= -2312 && y >= 300 &&y <= 310 && dy <= 0 ){
        y = 300
        dy = 0
    }
    //left
    if(scrollx <= -2148 && scrollx >= -2198 && y >= 225 && y <= 285 ){
        scrollx = -2148
    }
    //right
    if(scrollx <= -2262 && scrollx >= -2312 && y >= 225 && y <= 285 ){
        scrollx = -2312
    }
    
//上の長いやつ
         //up
if (y <= 60 && y >= 43) {
    if (scrollx <= -2268 && scrollx >= -2594 && dy >= 0) {
        y = 60;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -2268 && scrollx >= -2594 && y >= 140 &&y <= 150 && dy <= 0 ){
        y = 140
        dy = 0
        //action
    }
    //left
    if(scrollx <= -2268 && scrollx >= -2318 && y >= 65 && y <= 135 ){
        scrollx = -2268
    }
    //right
    if(scrollx <= -2544 && scrollx >= -2594 && y >= 65 && y <= 135 ){
        scrollx = -2594
    }

    // 4こ
             //up
if (y <= 60 && y >= 43) {
    if (scrollx <= -2666 && scrollx >= -2868 && dy >= 0) {
        y = 60;
        dy = 0;
        isjump = false;
    }
}


    //under
    if(scrollx <= -2666 && scrollx >= -2868 && y >= 140 &&y <= 150 && dy <= 0 ){
        y = 140
        dy = 0
        //action
    }
    //left
    if(scrollx <= -2666 && scrollx >= -2716 && y >= 65 && y <= 135 ){
        scrollx = -2666
    }
    //right
    if(scrollx <= -2818 && scrollx >= -2868 && y >= 65 && y <= 135 ){
        scrollx = -2868
    }



}
//落下判定
function Tofall(){
    //三連穴
    if(scrollx <= -432 && scrollx >= -540 && y >= 360){
        fall = true
    }

    if(scrollx <= -1748 && scrollx >= -1868 && y >= 360){
        fall = true
    }

    if(scrollx <= -2952 && scrollx >= -3068 && y >= 360){
        fall = true
    }








    if (y >=550){
        init();
    }

}








function draw (){
    de();
    ctx.clearRect(0,0,canvas.width,canvas.height)
    stage();
    checkHit();

    //アイテム描画
    if (lookMush1 === true) {
        ctx.drawImage(mush,520 + scrollx,220,40,40)
    }
    


    switch(dir){
        case "right":
            ctx.drawImage(playerRight,450,y,40,40)
            break;

        case "left":

            ctx.drawImage(playerLeft,450,y,40,40)
            break;

        case "down":

    }

    scrollx += dx
    y += dy

    if (y >= 380 && fall === false){
        isjump = false;
        dy = 0;
        y = 380
    }

    if (isjump === true || fall === true){
       dy += g;
    }


    console.log();
}
//制御
document.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowRight":
        if(isjump === false){
        dir = "right"
        dx = -12
        }else{
            dx = -4
        }
        break;

        case "ArrowLeft":
        if(isjump === false){
        dir = "left"
        dx = 12
        }else 
            dx = 4
        break;

        case "ArrowUp":
            if (isjump === false){
            dy = -13
            isjump = true
            
        }
        break;

    }


})

document.addEventListener("keyup",function(e){
    switch(e.key){
        case "ArrowRight":
        case "ArrowLeft":
        dx = 0;
        break;
    }
})


//マップ
//1 =地面   2　=　はてな　3 = ブロック
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];




let maprows = map.length;
let mapcols = map[0].length;



function stage(){
    for (let y = 0; y < maprows; y++){
        for (let x = 0; x < mapcols; x++){
            let tile = map[y][x]
            if (tile === 1) {
                ctx.drawImage(block,scrollx +blocksize*x, blocksize*y - 20,blocksize,blocksize)
            }else if(tile === 2){
                ctx.drawImage(question,scrollx +blocksize*x, blocksize*y - 20,blocksize,blocksize)
            }else if(tile === 3){
                ctx.drawImage(renga,scrollx +blocksize*x, blocksize*y - 20,blocksize,blocksize)
            }
        }
    }
}