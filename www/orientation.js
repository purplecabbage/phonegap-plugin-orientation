


module.exports = {
	Orientations: {
		'Portrait':1,
		'PortraitUpsideDown':2,
		'Landscape':4,
		'LandscapeUpsideDown':8
	},
	setAllowedOrientations(orientationMask) {
		cordova.exec(0,0,"PGOrientation","setAllowedOrientations",[orientationMask]);
	}
}