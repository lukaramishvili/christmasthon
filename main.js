//// This file is part of Space Audio.

//// Space Audio is free software: you can redistribute it and/or modify
//// it under the terms of the GNU Affero General Public License as published by
//// the Free Software Foundation, either version 3 of the License, or
//// (at your option) any later version.

//// Space Audio is distributed in the hope that it will be useful,
//// but WITHOUT ANY WARRANTY/ without even the implied warranty of
//// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//// GNU Affero General Public License for more details.

//// You should have received a copy of the GNU Affero General Public License
//// along with Space Audio.  If not, see <http://www.gnu.org/licenses/>.

/*var $logger = $("<div id='logger' />")
    .css({ position : "absolute", right : 0, bottom : 0,
	   "background-color" : "gray", padding : 5,
	 }).appendTo("body");

function log(s) { $logger.html(s); }

function describeFrame(f) {
    var l = f.gestures.length + " gestures - ";
    for(var ig in f.gestures) {
	var g = f.gestures[ig];
	l += g.state + " " + g.type + ",";
    }
    l += "<br>";
    return l;
}

function processAction(argset){
    
}*/

var xMin = -150;
var xMax = 150;
var zOn = 100;
var zOff = 200;

var leap = zLeap().init(function(frame, prevFrame){
/*    if(frame.gestures.length > 0){
	for(var ig in frame.gestures){
	    var g = frame.gestures[ig];
	    processAction({ type : "gesture", gesture : g, frame : frame });
	}
    }*/
    for(var nh in frame.hands){
	var h = frame.hands[nh];
	for(var nf in h.fingers){
	    var f = h.fingers[nf];
	    var x = f.tipPosition[0];
	    var y = f.tipPosition[1];
	    var z = f.tipPosition[2];
	    if(z < zOn){
		//set drawing cursor
		//draw();
	    } else if(z > zOn && z < zOff){
		//near touchzone, set warning cursor
	    } else {
		//not touching, set normal cursor
	    }
	    //
	    console.log(JSON.stringify([x,y,z]));
	}
    }
});

