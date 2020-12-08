$(document).ready(function() {
    if($.fn.mediaelementplayer) {
        $('#audio-player').mediaelementplayer({
            alwaysShowControls: true,
            features: ['playpause', 'volume', 'progress'],
            audioVolume: 'horizontal',
            audioWidth: 400,
            audioHeight: 120
        });
    }
    });