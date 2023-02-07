function shakeOnload() {

    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.body.innerHTML = 
        'div id="permission"> \
            <div class="app">\
                <div class="app_item"> \
                    <span>\
                        Bạn cần cấp quyền để sử dụng tính năng\
                    </span>\
                    <img src="./img/shake-icon.png">\
                    <div class="btn">\
                        <div class="accept" id="accept-request">\
                            Cấp quyền\
                        </div>\
                        <div class="cancel">\
                            Thoát\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';
        return;
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