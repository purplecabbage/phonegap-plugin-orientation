

module.exports = {
	setAllowedOrientations(orientationMask) {
		cordova.exec(0,0,"PGOrientation","setAllowedOrientations",orientationMask);
	}
}