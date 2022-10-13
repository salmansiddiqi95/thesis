var player = videojs('videoplayer',{
    autoplay: 'muted',
    controls: true,
    width: 500,
    Height: 400,
    loop: true,
    responsive: true,
    playbackRates: [0.5, 1, 2.5, 5],
    plugins: {
        hotkeys: {

        }
        
    }


    
    
    
});
player.src([
    {
       src: "assets/gT3TTEGUJ4_720p.mp4",
       type: 'video/mp4',
       label: '720P',
    },
    {
       src: "assets/gT3TTEGUJ4_720p.mp4",
       type: 'video/mp4',
       label: '480P',
       selected: true,
    },
    {
       src: "assets/gT3TTEGUJ4_720p.mp4",
       type: 'video/mp4',
       label: '360P',
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
player.rotate(player);






