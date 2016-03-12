# phonegap-plugin-orientation
Simple runtime configuration of allowed orientations for PhoneGap apps.

The plugin provides one call that allows you to set the orientations that you wish to support.

#PGOrientation.Orientations
An enum of orientation values that can be OR'd together to define which ones you want to support

Values include: 
- Portrait
- PortraitUpsideDown
- LandscapeLeft
- LandscapeRight


#PGOrientation.setAllowedOrientations(success,error,orientationMask);

success: `Function` - callback to be called after successfully setting allowed orientations

error: `Function` - callback to be called if an error occurs setting allowed orientations

orientationMask: `Number` - or'd values from PGOrientation.Orientations

example use:

    var orientMask = PGOrientation.Orientations.Portrait | PGOrientation.Orientations.PortraitUpsideDown;

    var onSuccess = function(){
        console.log("successfully set orientations to Portrait and PortraitUpsideDown")
    };

    var onError = function(err) {
        console.log("error setting orientations to Portrait and PortraitUpsideDown :: " + err);
    }

    PGOrientation.setAllowedOrientations(onSuccess,onError,orientMask);


