
    var DisplayInfo = Windows.Graphics.Display.DisplayInformation;
    var Orientations = Windows.Graphics.Display.DisplayOrientations;
   
module.exports = {
    setAllowedOrientations: function (win, fail, args) {
        //console.log("setAllowedOrientations proxy called with " + args);

        try {
            var prefOrients = args[0];
            var winPrefs = 0;

            if (prefOrients & 1) { // UIInterfaceOrientationPortrait
                winPrefs = winPrefs |  Orientations.portrait;
            }
            if (prefOrients & 2) { // UIInterfaceOrientationPortraitUpsideDown
                winPrefs = winPrefs | Orientations.portraitFlipped;
            }
            if(prefOrients & 4) { // UIInterfaceOrientationLandscapeLeft
                winPrefs = winPrefs | Orientations.landscape;
            }
            if (prefOrients & 8) { // UIInterfaceOrientationLandscapeRight
                winPrefs = winPrefs | Orientations.landscapeFlipped;
            }
            setTimeout(function () {
                DisplayInfo.autoRotationPreferences = winPrefs;
                win();
            }, 0);
        }
        catch (err) {
            console.log("error :: " + err);
            fail();
        }
        
    }
}

require("cordova/exec/proxy").add("PGOrientation", module.exports);
