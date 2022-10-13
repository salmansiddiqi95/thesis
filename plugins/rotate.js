function rotate(player){
    var dimension = 0;
    var rotateLeftButton = createButton('&#8635;');
    var rotateRightButton = createButton('&#8634;');

    rotateLeftButton.onclick = function(){
        dimension += 90;
        dimension %= 360;
        player.zoomrotate({rotate: dimension});

    };

    rotateRightButton.onclick = function(){
        dimension -= 90;
        if(Math.abs(dimension)==360) {
            dimension =0;

        }
        player.zoomrotate({rotate: dimension});
        
    };

    var playbackRates = document.querySelector('.vjs-playback-rate');
    insertAfter(rotateLeftButton, playbackRates);
    insertAfter(rotateRightButton, rotateLeftButton);

    function createButton(icon){
        var button = document.createElement('button');
        button.classList.add('vjs-menu-button');
        button.innerHTML = icon;
        button.style.fontSize = '1.8em';
        return button
    };

    function insertAfter(newEl, element){
        element.parentNode.insertBefore(newEl, element.nextSibling);
    };

};

videojs.registerPlugin('rotate', rotate);