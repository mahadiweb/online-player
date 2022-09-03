function playM3u8(url){

  if(Hls.isSupported()) {
        var config = {
        debug: true,
        xhrSetup: function (xhr,url) {
            xhr.withCredentials = true; // do send cookie
        xhr.setRequestHeader("Access-Control-Allow-Headers","Content-Type, Accept, X-Requested-With");
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.setRequestHeader("Access-Control-Allow-Credentials","true");

        var getcookie = window.location.href.split("#")[2];
        //console.log(url);
        url = url + "?" + getcookie;
        xhr.open('GET', url, true);

        }
      };

      var video = document.getElementById('video');
      video.volume = 1.0;
      var hls = new Hls(config);
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = "M M3U8 Player"
    }
}

//console.log(window.location.href.split("#"));
playM3u8(window.location.href.split("#")[1])
