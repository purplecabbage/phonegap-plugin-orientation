


module.exports = {
	Orientations: {
		'Portrait':1,
		'PortraitUpsideDown':2,
		'LandscapeLeft':4,
		'LandscapeRight':8
	},
	setAllowedOrientations(success,error,orientationMask) {
		var win = success || function(){};
		var lose = error || function(){};
		cordova.exec(win,lose,"PGOrientation","setAllowedOrientations",[orientationMask]);
	}
}
