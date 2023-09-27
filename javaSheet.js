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

player.addEventListener('w', (e) => {
    
})
