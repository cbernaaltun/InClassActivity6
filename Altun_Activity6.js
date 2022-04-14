var level = 1;
var clickedCount = 0;
var interval = 500;

setInterval(function(){ 
    var random = Math.random() * 5;
    var pixelLeft = random*300+"px";
    var pixelTop = random*60+"px";
    document.getElementById('buttonDiv').style = "margin-left:" + pixelLeft + "; margin-top:" + pixelTop;  
}, interval);

function clickButton() {
    clickedCount = clickedCount + 1;
    var leftClickCount = 3 - clickedCount;
    document.getElementById('btn').value = "Click me " + leftClickCount + " times";
    if(clickedCount == 3) {        
        document.getElementById('btn').value = "Click me 3 times";
        interval = interval - 100;
        level = level + 1;
        clickedCount = 0;
        if(level == 7) {
            alert("Congratulations, You win the game!");
        } else {
            alert("Congratulations, You are in " + level + ". step!");
        }
    }
};


