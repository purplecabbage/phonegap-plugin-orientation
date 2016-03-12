


module.exports = {
	Orientations: {
		'Portrait':1,
		'PortraitUpsideDown':2,
		'Landscape':4,
		'LandscapeUpsideDown':8
	},
	setAllowedOrientations(success,error,orientationMask) {
		var win = success || function(){};
		var lose = error || function(){};
		cordova.exec(win,lose,"PGOrientation","setAllowedOrientations",[orientationMask]);
	}
}
