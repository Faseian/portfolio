var count = 0;
var playerXPos = parseInt(document.getElementById("player").offsetLeft);
console.log(playerXPos);


button.addEventListener('click', (e) => {
    count++;
    document.getElementById("counter").textContent = "Counter: " + count;

    if (count > 100) {
        alert("Touch some grass");
    }
})

document.addEventListener('keydown', function(e) {
    console.log(e.key)
    movement();
});

function movement() {
            var newXPos = playerXPos + 10;
            document.getElementById("player").style.height = newXPos + "px";
            playerXPos = parseInt(document.getElementById("player").offsetLeft);
            console.log(playerXPos);
}