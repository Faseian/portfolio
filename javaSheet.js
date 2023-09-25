var count = 0;

button.addEventListener('click', (e) => {
    count++;
    document.getElementById("counter").textContent = "Counter: " + count;

    if (count > 100) {
        alert("Touch some grass");
    }
})

player.addEventListener()