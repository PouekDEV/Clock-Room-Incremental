// https://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript
// Answer by https://stackoverflow.com/users/1712905/john-smith
// Thank you for this amazing script!
var testConnectionSpeed = {
    imageAddr : "https://www.pouekdev.one/nothinsthere.gif",
    downloadSize : 988078,
    run:function(mbps_max,cb_gt,cb_lt){
      testConnectionSpeed.mbps_max = parseFloat(mbps_max) ? parseFloat(mbps_max) : 0;
      testConnectionSpeed.cb_gt = cb_gt;
      testConnectionSpeed.cb_lt = cb_lt;
      testConnectionSpeed.InitiateSpeedDetection();
    },
    InitiateSpeedDetection: function() {
      window.setTimeout(testConnectionSpeed.MeasureConnectionSpeed, 1);
    },
    result:function(){
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = testConnectionSpeed.downloadSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);
      if(speedMbps >= (testConnectionSpeed.max_mbps ? testConnectionSpeed.max_mbps : 1) ){
        testConnectionSpeed.cb_gt ? testConnectionSpeed.cb_gt(speedMbps) : false;
      }else {
        testConnectionSpeed.cb_lt ? testConnectionSpeed.cb_lt(speedMbps) : false;
      }
    },
    MeasureConnectionSpeed:function() {
      var download = new Image();
      download.onload = function () {
          endTime = (new Date()).getTime();
          testConnectionSpeed.result();
      }
      startTime = (new Date()).getTime();
      var cacheBuster = "?nnn=" + startTime;
      download.src = testConnectionSpeed.imageAddr + cacheBuster;
    }
  }
  
  
  
  
  // start test immediatly, you could also call this on any event or whenever you want
  //testConnectionSpeed.run(1.5, function(mbps){console.log(">= 1.5Mbps ("+mbps+"Mbps)")}, function(mbps){console.log("< 1.5Mbps("+mbps+"Mbps)")} )