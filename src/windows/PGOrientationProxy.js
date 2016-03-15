module.exports = {
	setAllowedOrientations:function(win, fail, args) {
		console.log("setAllowedOrientations proxy called with " + args);
	}
}

require("cordova/exec/proxy").add("PGOrientation", module.exports);