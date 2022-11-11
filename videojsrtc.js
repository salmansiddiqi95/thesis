videojs.plugin('videojsRtc', function(options) {

    var
      iframe = document.createElement('iframe'),
      wrapper = document.createDocumentFragment(),
      wrapperDiv = document.createElement('div'),
      wrapperRtcDiv = document.createElement('div'),
  
      divJoin = document.createElement('div'),
      labelJoin = document.createElement('label'),
      inputText = document.createElement('input'),
      inputButton = document.createElement('input'),
  
      divId = document.createElement('div'),
      labelId = document.createElement('label'),
      labelKey = document.createElement('label'),
  
      iframeSrc = '//videojs-rtc.appspot.com/',
      prop,
      vel = this.el();
  
    labelJoin.textContent = "Enter room key to join a room:";
    inputText.type = "text";
    inputButton.value = "Join Room";
    inputButton.type = "button";
  
    inputButton.addEventListener('click', function(evt) {
      var newKey = inputText.value;
      if (newKey.length > 0) {
        iframe.src = iframeSrc + "?r=" + newKey;
      }
    });
  
    divJoin.appendChild(labelJoin);
    divJoin.appendChild(inputText);
    divJoin.appendChild(inputButton);
  
    labelId.textContent = "Current room key:";
  
    divId.appendChild(labelId);
    divId.appendChild(labelKey);
  
    window.addEventListener('message', function(evt) {
      console.log()
      var jsonData, room_key;
      jsonData = JSON.parse(evt.data);
      if (jsonData.error) {
        videojs.log(jsonData.error);
        wrapperRtcDiv.parentElement.removeChild(wrapperRtcDiv);
      } else if (jsonData.userMedia) {
        wrapperRtcDiv.style.height = 'auto';
        wrapperRtcDiv.style.width = 'auto';
      } else {
        var room_key = jsonData['room_key'];
        labelKey.textContent = room_key;
      }
    });
  
    iframe.src = iframeSrc;
    iframe.height = 350;
    iframe.width = 600;
  
    wrapperRtcDiv.style.height = '1px';
    wrapperRtcDiv.style.width = '1px';
    wrapperRtcDiv.style.overflow = "hidden";
    wrapperRtcDiv.appendChild(divJoin);
    wrapperRtcDiv.appendChild(divId);
    wrapperRtcDiv.appendChild(iframe);
  
    vel.parentElement.replaceChild(wrapperDiv, vel);
    wrapper.appendChild(vel);
    wrapper.appendChild(wrapperRtcDiv);
    wrapperDiv.appendChild(wrapper);
  });