function shakeOnload() {

    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }

    var myShakeEvent = new Shake({
        threshold: 15
    });

    myShakeEvent.start();
    window.addEventListener('shake', shakeEventDidOccur, false);

    function shakeEventDidOccur() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }
}

window.onload = shakeOnload()