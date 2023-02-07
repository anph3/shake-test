function shakeOnload() {
    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }

    if (getMobileOperatingSystem() == 2){
        document.getElementById('permission').style.display = 'none';
    }

    shakeAction(); 
}

function shakeAction(){
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


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        alert("Windows Phone");
        return 1;
    }
    if (/android/i.test(userAgent)) {
        return 2;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        alert("iOS");
        return 3;
    }
    alert("unknow");
    return 4;
}

window.onload = shakeOnload()