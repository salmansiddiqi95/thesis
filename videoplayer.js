var player = videojs('videoplayer',{
    autoplay: 'muted',
    controls: true,
    width: 500,
    Height: 400,
    loop: true,
    responsive: true,
    playbackRates: [0.5, 1, 2.5, 5],
    plugins: {
        hotkeys: {}
      }  
  });

player.rotate();

player.src([
    {
       src: "assets/gT3TTEGUJ4_480p.mp4",
       type: 'video/mp4',
       label: '480P',
    },
    {
       src: "assets/gT3TTEGUJ4_720p.mp4",
       type: 'video/mp4',
       label: '720P',
       selected: true,
    },
    {
       src: "assets/gT3TTEGUJ4_1080p.mp4",
       type: 'video/mp4',
       label: '1080P',
    },
 ]);
 player.controlBar.addChild('QualitySelector');
 
 var span = document.querySelector('span');
 player.ready (function(){
   if (!player.textTracks) {
     console.log('no textrack foend');
    }
    var track = player.textTracks()[0];
    track.mode = 'hidden';
    track.oncuechange = function(e) {
      var cue = this.activeCues[0];
      if (cue) {
        span.innerHTML = '';
        span.appendChild(cue.getCueAsHTML());
      }
    };
  });
  const ControlBar = videojs.getComponent('ControlBar');
  var controls = document.getElementById('controls');
  console.log(controls);
  var controlBar = new ControlBar(player);
  console.log(controlBar);
  // player calls dispose on children, but this is not a child
  player.on('dispose', controlBar.dispose.bind(controlBar))
  controls.appendChild(controlBar.el());


  var player1 = videojs('videoplayer1',{
    autoplay: 'muted',
    controls: true,
    width: 500,
    Height: 400,
    responsive: true,
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2.5, 5],
    plugins: {
        hotkeys: {

        }
    }   
});










