function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let times = document.getElementById("times")
    times.innerHTML = "";
    let now = new Date(); 
    now.setMinutes(now.getMinutes() + 14);
    for (let i = 1; i<=6; i++) {
        now.setMinutes(now.getMinutes() +90)
        times.innerHTML +=now.toLocaleTimeString(
            'en-us',
            {
                timeStyle: "short"
            }
        ) + "<br/>" 
    }
}
