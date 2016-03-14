# phonegap-plugin-orientation
Simple runtime configuration of allowed orientations for PhoneGap apps.

The plugin provides one call that allows you to set the orientations that you wish to support.

###PGOrientation.Orientations
An enum of orientation values that can be OR'd together to define which ones you want to support

Values include: 
- Portrait
- PortraitUpsideDown
- LandscapeLeft
- LandscapeRight


###PGOrientation.setAllowedOrientations(success,error,orientationMask);

`success`: `Function` - callback to be called after successfully setting allowed orientations

`error`: `Function` - callback to be called if an error occurs setting allowed orientations

`orientationMask`: `Number` - or'd values from PGOrientation.Orientations

example use:

    var orientMask = PGOrientation.Orientations.Portrait | PGOrientation.Orientations.PortraitUpsideDown;
    var onSuccess = function(){
        console.log("successfully set orientations to Portrait and PortraitUpsideDown")
    };
    var onError = function(err) {
        console.log("error setting orientations to Portrait and PortraitUpsideDown :: " + err);
    }
    PGOrientation.setAllowedOrientations(onSuccess,onError,orientMask);

###iOS Quirks

  This plugin does not replace the Orientation preference tag, it provides a subset of allowed orientations that are configurable at runtime.  Only orientations explicitly allowed by the orientation preference tag in config.xml can be supported at runtime.  The expected use of this plugin is that most developers would support 'all' orientations in the preference tag, and then dynamically change what was allowed at runtime, based on what they are displaying in the app.
 
This plugin does NOT force a new orientation, the user will still need to rotate the device in order for the orientation to actually change.

###Demo App

The demo/ folder contains a simple app to demonstrate the functionality of this plugin, and how to use it's api.

After cloning the repo, you can run the demo by running :

    cd demo/
    cordova platform add ios
    cordova plugin add .. --link
    cordova run ios



