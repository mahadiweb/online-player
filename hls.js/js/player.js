function playM3u8(url,signedurl = ""){

  if(Hls.isSupported()) {

    if (signedurl !=="") {
        var config = {
        debug: true,
        xhrSetup: function (xhr,url) {
            xhr.withCredentials = true; // do send cookie
        xhr.setRequestHeader("Access-Control-Allow-Headers","Content-Type, Accept, X-Requested-With");
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.setRequestHeader("Access-Control-Allow-Credentials","true");

        myurl = url + "?" + signedurl;
        xhr.open('GET', myurl, true);

        }
      };
      //alert("yes");
    }else{
      //alert("no");
      var config = "";
    }

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



$("#submit").on("click",function(event){
  event.preventDefault();

  mainurl = $("#mainurl").val();
  signedurl = $("#signedurl").val();

  if (signedurl=="") {
    playM3u8(mainurl,"");
  }else{
    playM3u8(mainurl,signedurl);
  }

})

$("#mainurl").keyup(function(){
  
  $("#submit").removeAttr("disabled");

})

